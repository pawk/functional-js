export default function fibonacci(count, a = 1, b = 1) {
  return count === 0 ? a : [a].concat(fibonacci(--count, b, a + b));
}

// example call: fibonacci(10)

// you can also change starting values by setting up second and third parameter agrgument