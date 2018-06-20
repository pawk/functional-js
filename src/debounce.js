module.exports = function debounce(fn, ms) {
  let timeoutId;

  return (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    } else {
      fn(...args);
    }
    timeoutId = setTimeout(() => fn(...args), ms);
  };
}

/**
 * example call
 * 
 * const debounced = debounce(() => console.log('origin fn'), 1000);
 * 
 * setInterval(debounced, 1300); // this will fire every 1000ms
 * setInterval(debounced, 800); // this will fire only once
 * 
 */
