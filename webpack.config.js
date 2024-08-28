const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "source-map",
    entry: "./src/index.js",
    module: {
        rules: [
            test: /\.js$/,
            exclude: /node_modules/,
            use: {loader: ""}
        ]
    }
}