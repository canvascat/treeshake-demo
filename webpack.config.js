import { join } from "path";
import { realpathSync } from "fs";
import TerserPlugin from "terser-webpack-plugin";
import { terserOptions } from "./terser.config.js";

const appDirectory = realpathSync(process.cwd());
const srcPath = join(appDirectory, "./src");
const resolveApp = (...relativePath) => join(appDirectory, ...relativePath);

/** @type {import('webpack').Configuration['optimization']} */
const optimization = {
  minimize: true,
  minimizer: [
    new TerserPlugin({
      terserOptions,
    }),
  ],
};

// https://webpack.docschina.org/guides/tree-shaking/
// https://juejin.cn/post/7169004126469914654
/**
 *
 * @param {Record<string, string>} env
 * @param {Record<string, string>} argv
 * @returns {import('webpack').Configuration}
 */
export default (env, argv) => {
  return {
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
    optimization: {
      //   // usedExports: true,
      // sideEffects: true,
      usedExports: true,
      //   // innerGraph: true,
      // minimize: true,
      // https://github.com/webpack/webpack/blob/dd44b206a9c50f4b4cb4d134e1a0bd0387b159a3/lib/config/defaults.js#L1446
      minimizer: optimization.minimizer, // [],
      // terser .\dist\webpack.js --compress passes=2
    },
    output: {
      filename: `webpack.js`,
      // clean: false,
      // libraryExport: 'module',
      libraryTarget: "module",
    },
    experiments: {
      outputModule: true,
    },
  };
};
