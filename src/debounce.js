module.exports = function debounce(fn, ms) {
  let timeoutId;

  return () => {
    if (timeoutId) {
      console.log('debounced!')
      clearTimeout(timeoutId);
    } else {
      fn();
    }
    timeoutId = setTimeout(fn, ms);
    
  }
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
