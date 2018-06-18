export default function factorial(a, n = a) {
  return n === 1 ? a : factorial(a*(n-1), n-1);
}
