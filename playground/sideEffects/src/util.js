export const random = (max = 10) => Math.floor(Math.random() * max);

export const add = (a, b) => a + b;

export const print = (...args) => console.debug(...args);

export * from "./get-time.js";
