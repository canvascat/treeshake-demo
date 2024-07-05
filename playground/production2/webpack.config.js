import { readFileSync } from "fs";

const pkg = JSON.parse(readFileSync("./package.json", "utf-8"));

/**
 * @returns {import('webpack').Configuration}
 */
export default () => {
  return {
    entry: "./src/index.js",
    // mode: "development",
    devtool: false,
    mode: "production",
    // module: {
    //   rules: [
    //     {
    //       test: /\.css$/i,
    //       use: ["style-loader", "css-loader"],
    //     },
    //   ],
    // },
    output: {
      filename: `output.js`,
      // libraryTarget: "module",
    },
    // optimization: {
    //   usedExports: false,
    //   minimizer: [],
    // },
    // experiments: {
    //   outputModule: true,
    // },
  };
};
