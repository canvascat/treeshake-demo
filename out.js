/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/util.js
const random = (max = 10) => Math.floor(Math.random() * max);

const add = (a, b) => a + b;

const print = (...args) => console.debug(...args);

;// CONCATENATED MODULE: ./src/index.js


const sum = add(random() + random());

console.log(sum);

/******/ })()
;