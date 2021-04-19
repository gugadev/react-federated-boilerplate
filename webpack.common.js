/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require("path");
const Dotenv = require("dotenv-webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const paths = {
    source: resolve(__dirname, "src"),
};

module.exports = {
    entry: resolve(paths.source, "index.tsx"),
    output: {
        filename: "[name].js",
        publicPath: "/",
        path: resolve(__dirname, "build"),
        libraryTarget: "umd",
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".scss", ".css"],
        plugins: [new TsconfigPathsPlugin()],
    },
    module: {
        rules: [
            {
                test: /\.ts(x)?$/,
                use: ["ts-loader"],
                exclude: [/node_modules/],
            },
            {
                test: /\.svg?$/,
                use: ["@svgr/webpack"],
                exclude: [/node_modules/],
            },
            {
                test: /\.scss?$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    { loader: "css-modules-typescript-loader" },
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[hash:base64:3]",
                            },
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: { sourceMap: false },
                    },
                    {
                        loader: "sass-loader",
                        options: { sourceMap: false },
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: "file-loader",
                    },
                ],
            },
        ],
    },
    plugins: [new Dotenv()],
};
