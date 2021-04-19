/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { merge } = require("webpack-merge");

const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    entry: common.entry,
    devServer: {
        contentBase: "./www",
        watchContentBase: true,
        publicPath: "/",
        compress: true,
        port: 3000,
        writeToDisk: true,
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "public/**/*"),
                    to: path.resolve(__dirname, "www/"),
                },
            ],
        }),
        new CleanWebpackPlugin(),
    ],
});
