import * as terser from "terser";
import * as path from "node:path";
import { writeFile } from "node:fs/promises";
import { cwd } from "node:process";

const content =
  '/******/ (() => { // webpackBootstrap\n/******/ \t"use strict";\nvar __webpack_exports__ = {};\n\n;// CONCATENATED MODULE: ./src/util.js\nconst random = (max = 10) => Math.floor(Math.random() * max);\r\n\r\nconst add = (a, b) => a + b;\r\n\r\nconst print = (...args) => console.debug(...args);\r\n\n;// CONCATENATED MODULE: ./src/index.js\n\n\nconst sum = add(random() + random());\n\nconsole.log(sum);\n\n/******/ })()\n;';

async function setup() {
  const { code } = await terser.minify(
    {
      ["input.js"]: content,
    },
    {
      compress: {
        passes: 2,
      },
    }
  );

  await writeFile(path.join(cwd(), "./output.min.js"), code);
}

setup();
