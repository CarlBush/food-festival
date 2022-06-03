const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
    //The entry point is the root of the bundle and the beginning of the dependency graph
    entry: "./assets/js/script.js",
    //takes entry and bundles code and output that code to a folder
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.bundle.js"
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

