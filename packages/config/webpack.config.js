import { merge } from "webpack-merge";

/** @type {import('webpack').Configuration} */
export const baseWebpackConfig = {
  entry: "./src/index.js",
  mode: "development",
  devtool: false,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    libraryTarget: "module",
  },
  experiments: {
    outputModule: true,
  },
};
/**
 * @param {import('webpack').Configuration} config
 * @returns {import('webpack').Configuration}
 */
export const defineConfig = (config) => merge(baseWebpackConfig, config);
