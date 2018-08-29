#!/usr/bin/env node

const trampoline = require('../trampoline');
const num = process.argv[2] || 10;

console.log(fibonacci(num));

function fibonacci(count, a = 1, b = 1) {
  const acc = [];

  function myself(count, a, b) {
    if (!count) {
      return acc;
    }
    acc.push(a);
    return () => myself(count - 1, b, a + b);
  }

  return trampoline(myself)(count, a, b);
}
