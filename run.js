import * as terser from "terser";
import * as path from "node:path";
import * as fsp from "node:fs/promises";
import { cwd } from "node:process";

async function setup() {
  const content = await fsp.readFile(
    path.join(cwd(), "./packages/utils/src/print.js"),
    "utf-8"
  );
  const output = await terser.minify(
    {
      ["print.js"]: content,
    },
    {
      compress: { passes: 2 },
    }
  );

  console.debug(output);
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
