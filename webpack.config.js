const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    //The entry point is the root of the bundle and the beginning of the dependency graph
    entry: {
        app: "./assets/js/script.js",
        events: "./assets/js/events.js",
        schedule: "./assets/js/schedule.js",
        tickets: "./assets/js/tickets.js",
    },
    //takes entry and bundles code and output that code to a folder
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    module: {
        rules: [
            {
                //regex to test for only .jpg files
                test: /\.jpg$/i,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            esModule: false,
                            name(file) {
                                return "[path][name].[ext]"
                            },
                            publicPath: function (url) {
                                return url.replace("../", "/assets/")
                            }
                        }
                    },
                    {
                        //used to reduce image size
                        loader: "image-webpack-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            //Generates report.html in the dist folder (can set value to "disable" also)
            analyzerMode: "static",
        })
    ],
    //mode default is "production"
    mode: "development"
};

