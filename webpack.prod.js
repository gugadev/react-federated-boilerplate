/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const common = require("./webpack.common");

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    optimization: {
        minimizer: [
            new TerserPlugin({
                sourceMap: true,
                terserOptions: {
                    output: { comments: false },
                },
            }),
        ],
    },
    // use it only if you are planning to publish aslibrary
    // externals: {
    //     react: {
    //         commonjs: "react",
    //         commonjs2: "react",
    //         amd: "React",
    //         root: "React",
    //     },
    //     "react-dom": {
    //         commonjs: "react-dom",
    //         commonjs2: "react-dom",
    //         amd: "ReactDOM",
    //         root: "ReactDOM",
    //     },
    // },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: "./**/*",
                    context: path.resolve(__dirname, "public"),
                    globOptions: {
                        dot: true,
                        gitignore: true,
                        force: true,
                    },
                },
            ],
        }),
        new CleanWebpackPlugin(),
    ],
});
