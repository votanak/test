var func = function (x) {
  if (x < 0) return false;
  let rev = 0;
  let x1 = x;
  while (x1 > 0) {
    rev = rev * 10 + (x1 % 10);
    x1 = Math.floor(x1 / 10);
  }

  return x === rev;
};

console.log(func(1221));
