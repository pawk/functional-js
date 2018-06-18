export default function trampoline(fn) {
  let result = fn();
  while (typeof result !== 'function') {
    result = result();
  }
  return result;
}
