var func = function (strs) {
  res = '';
  len = Math.min(...strs.map((s) => s.length));
  for (i = 0; i < len; i++) {
    for (j = 0; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) return res;
    }
    res = res + strs[0][i];
  }
  return res;
};
console.log(func(['flower', 'flow', 'flight'])); //
