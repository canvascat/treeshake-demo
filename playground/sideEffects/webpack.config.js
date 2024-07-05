import TerserPlugin from "terser-webpack-plugin";
import { terserOptions } from "config/terser";

/** @type {import('webpack').Configuration['optimization']} */
const optimization = {
  minimize: true,
  minimizer: [new TerserPlugin({ terserOptions })],
};
// [webpack-cli] TypeError [ERR_IMPORT_ASSERTION_TYPE_MISSING]: Module " " needs an import attribute of type "json"

// https://webpack.docschina.org/guides/tree-shaking/
// https://juejin.cn/post/7169004126469914654
/**
 * @returns {import('webpack').Configuration}
 */
export default () => {
  return {
    entry: "./src/index.js",
    mode: "development",
    devtool: false,
    output: {
      filename: `output.js`,
    },
    optimization: {
      usedExports: true,
      sideEffects: true,
      // sideEffects
      // minimize: true,
      // minimizer: [
      //   new TerserPlugin({
      //     terserOptions: {
      //       compress: {
      //         passes: 2,
      //       },
      //       mangle: false, // 不进行变量重命名
      //     },
      //   }),
      // ],
    },
  };
};
