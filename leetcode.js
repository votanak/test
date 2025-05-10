/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */

var isArraySpecial = function (nums, queries) {
  const isSpec = (arr) => {
    let maskStr1 = '01'.repeat(Math.ceil(arr.length / 2)).slice(0, arr.length);
    let maskStr2 = '10'.repeat(Math.ceil(arr.length / 2)).slice(0, arr.length);
    const res = arr.map((el) => Number(el % 2 === 0).toString()).join('');
    return (res === maskStr1) | (res === maskStr2);
  };

  const res = queries.map((el) => isSpec(nums.slice(el[0], el[1] + 1)));
  return res;
};

console.log(
  isArraySpecial(
    [1, 3, 4, 5, 6],
    [
      [0, 4],
      [1, 3],
    ],
  ),
);

// альтернатива от DS
// var isArraySpecial = function(nums, queries) {
//   // Предварительно вычисляем маску для всего nums (0 - чётное, 1 - нечётное)
//   const parityMask = Array(nums.length);
//   for (let i = 0; i < nums.length; i++) {
//       parityMask[i] = nums[i] % 2;
//   }

//   // Проверяем, является ли подмассив "специальным" (чередуется 0 и 1)
//   const checkSubArray = (start, end) => {
//       if (start === end) return true; // Подмассив из одного элемента всегда "специальный"
//       for (let i = start; i < end; i++) {
//           if (parityMask[i] === parityMask[i + 1]) {
//               return false;
//           }
//       }
//       return true;
//   };

//   // Обрабатываем все запросы
//   const result = [];
//   for (const [start, end] of queries) {
//       result.push(checkSubArray(start, end));
//   }
//   return result;
// };
