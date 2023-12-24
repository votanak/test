arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
var flat = function (arr, n) {
  for (i = 1; i <= n; i++)
    if (arr.isArray()) {
      newArr.push([...arr.Slice(1, j)]);
      newArr.push(...arr[j]);
      newArr.push([...arr.Slice(j + 1, arr.length)]);
      i -= 1;
    } else {
    }
};

console.log(flat(arr));
