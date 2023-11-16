function memoize(fn) {
  let memRes = {};
  return function (...args) {
    if (typeof memRes[args.toString()] === "undefined") {
      newVal = fn(...args);
      memRes = { ...memRes, [args.toString()]: newVal };
      return newVal;
    } else {
      console.log(memRes);
      return memRes[args.toString()];
    }
  };
}

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
console.log(memoizedFn(0, 0));
console.log(memoizedFn(0, 0));
console.log(callCount);
