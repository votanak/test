var debounce = function (fn, t) {
  let called = false;
  return function (...args) {
    called = true;
    return setTimeout(() => {
      console.log(called);
      if (called) {
        fn(...args);
        called = false;
      }
    }, t);
  };
};

const log = debounce(console.log, 500);
log("Hello 0");
setTimeout(() => log("Hello 2000"), 2000);
setTimeout(() => log("Hello 1000"), 1000);
