var debounce = function (fn, t) {
  let called = true;
  tOut = setTimeout(() => (called = false), t);
  return function (...args) {
    if (called) {
      clearTimeout(tOut);
      tOut = setTimeout(() => (called = false), t);
    }
    if (!called) return fn(...args);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
