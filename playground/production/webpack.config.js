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
    output: {
      filename: `output.js`,
      // libraryTarget: "module",
    },
    optimization: {
      minimizer: [],
    },
    // experiments: {
    //   outputModule: true,
    // },
  };
};
