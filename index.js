arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
var flat = function (arr, n) {
  for (i = 1; i<=n; i++) {
      for (j = 1; j<arr.length; j++){
        arr[j] = ...arr[j]
      }
  }
};

console.log(flat(arr));
