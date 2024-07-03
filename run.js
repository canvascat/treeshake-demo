import * as terser from "terser";
import * as path from "node:path";
import * as fsp from "node:fs/promises";
import { cwd } from "node:process";
import { terserOptions } from "./terser.config.js";

async function setup() {
  const content = await fsp.readFile(
    path.join(cwd(), "./dist/webpack.js"),
    "utf-8"
  );
  const output = await terser.minify(
    {
      ["webpack.js"]: content,
    },
    terserOptions
  );

  await fsp.writeFile(
    path.join(cwd(), "./dist/webpack-terser.js"),
    output.code
  );

  // console.debug(output);
}

setup();

// const output = terser.minify_sync(
//   path.join(
//     cwd(),
//     "./packages/utils/src/print.js"
//     //  "./dist/webpack.js"
//   ),
//   {
//     compress: { passes: 2 },
//   }
// );

// console.debug(output);
