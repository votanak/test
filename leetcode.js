var func = function (s) {
  let sign;
  const limit = (str) => {
    const MIN = -(2 ** 31);
    const MAX = 2 ** 31 - 1;
    return str < MIN ? MIN : str > MAX ? MAX : str;
  };
  s = s.trim();
  if (s[0] === '-') {
    sign = -1;
    s = s.slice(1);
  } else if (s[0] === '+') {
    sign = 1;
    s = s.slice(1);
  } else {
    sign = 1;
  }
  let endSimbol = s.length;
  for (i = 0; i < s.length; i++) {
    let code = s[i].charCodeAt(0);
    if (code < 48 || code > 57) {
      endSimbol = i;
      break;
    }
  }
  return limit(Number(s.slice(0, endSimbol)) * sign);
};

console.log(func('   -042'));
