/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const { resolve } = require("path");
const Dotenv = require("dotenv-webpack");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { TuneDtsPlugin } = require("@efox/emp-tune-dts-plugin");
const { ModuleFederationPlugin } = require("webpack").container;

const paths = {
    source: resolve(__dirname, "src"),
};

const deps = require("./package.json").dependencies;

module.exports = {
    entry: resolve(paths.source, "index.ts"),
    output: {
        filename: "[name].js",
        publicPath: "http://localhost:3000",
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
                test: /\.bootstrap.tsx?$/,
                use: ["bundle-loader", "ts-loader"],
            },
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
    plugins: [
        new Dotenv(),
        new ModuleFederationPlugin({
            name: "libraryName",
            library: {
                type: "var",
                name: "libraryName",
            },
            filename: "remoteEntry.js",
            remotes: {
                // what remotes you're using
            },
            exposes: {
                // all components you wanna expose. Eg.
                container: "./src/app.tsx",
            },
            shared: {
                ...deps,
                react: {
                    singleton: true,
                    requiredVersion: deps.react,
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: deps["react-dom"],
                },
            },
        }),
        new TuneDtsPlugin({
            output: resolve(__dirname, "build", "index.d.ts"),
            path: resolve(__dirname, "build"),
            name: "index.d.ts",
            isDefault: true,
        }),
    ],
};
