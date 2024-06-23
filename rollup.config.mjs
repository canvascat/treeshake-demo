import { defineConfig } from 'rollup'
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default defineConfig({
  input: './src/index.js',
  treeshake: true,
  plugins: [resolve(), commonjs(), json()],
  output: {
    file: './dist/rollup.js',
    // format: 'es'
    // format: 'esm' //  'module'
  }
})
// --registry=https://registry.npmmirror.com