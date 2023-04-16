function sum(a, b, c) {
  return a + b + c;
}

function multi(a, b, c) {
  return a * b * c;
}
console.log(sum.length);

function curry(fn) {
  return function (...args) {};
}

const curriedSum = curry(sum);
const currieMulti = curry(multi);
curriedSum(2, 3, 4);
curriedSum(2)(3)(4);
curriedMulti(2, 3)(4);
