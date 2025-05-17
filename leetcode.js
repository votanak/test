var func = function (s, p) {
  if (!(p.includes('.') || p.includes('*'))) return s === p;
  const regex = new RegExp(`^${p}$`, 'g');
  return regex.test(s);
};
console.log(func('mississippi', 'mis*is*p*.'));
