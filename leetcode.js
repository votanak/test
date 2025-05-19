var func = function (num) {
  let num1 = num;
  let rom = '';
  const romNum = [
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],
  ];
  for (i = 0; i < romNum.length; i++) {
    if (num1 >= romNum[i][0]) {
      const digit = Math.floor(num1 / romNum[i][0]);
      rom = rom + romNum[i][1].repeat(digit);
      num1 = num1 - digit * romNum[i][0];
    }
  }
  return rom;
};
console.log(func(3749)); //MMMDCCXLIX
