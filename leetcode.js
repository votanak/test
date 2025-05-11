var convert = function (s, numRows) {
  const strings = [];
  for (j = 0; j < numRows; j++) {
    strings.push([]);
  }
  let sNumber = 0;
  let sStep = 1;
  for (i = 0; i < s.length; i++) {
    strings[sNumber].push(s[i]);
    sNumber = sNumber + sStep;
    if (sNumber === numRows - 1) sStep = -1;
    if (sNumber === 0) sStep = 1;
    console.log(strings);
  }
  return strings.toString().replaceAll(',', '');
};

console.log(convert('ab', 3));
