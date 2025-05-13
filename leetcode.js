var convert = function (s, numRows) {
  if (numRows === 1) {
    return s;
  }
  const strings = new Array(numRows);
  strings.fill('');
  let sNumber = 0;
  let sStep = 1;
  for (i = 0; i < s.length; i++) {
    strings[sNumber] += s[i];
    sNumber = sNumber + sStep;
    if (sNumber === numRows - 1) sStep = -1;
    if (sNumber === 0) sStep = 1;
  }
  return strings.join('');
};

console.log(convert('ablkaj,alsdkjfskf,sdfsafdjlsa', 5));
