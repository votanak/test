var func = function (s, p) {
  if (!(p.includes('.') || p.includes('*'))) return s === p;
  return new RegExp(`^${p}$`, 'g').test(s);
};
console.log(func(3749)); //MMMDCCXLIX
