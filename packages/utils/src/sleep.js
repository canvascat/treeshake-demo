export const sleep = (ms = 0) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const name = 'sleep'
