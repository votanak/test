var join = function (arr1, arr2) {
  arr1.forEach(JSON.stringify(arr1));

  arr1.forEach((obj1) => {
    if (arr2[0].includes(obj1))
      if (obj1.id === obj2.id) {
        for (el in obj2) {
          obj1[el] = obj2[el];
        }
      }
  });
  //   if (!found) arr1.push(obj2){

  // };
  return arr1.sort((a, b) => a.id - b.id);
};

// var join = function (arr1, arr2) {
//   let obj1 = arr1.reduce((acc, el) => {
//     const { id, ...rest } = el;
//     acc[id] = rest;
//     return acc;
//   }, {});
//   let obj2 = arr2.reduce((acc, el) => {
//     const { id, ...rest } = el;
//     acc[id] = rest;
//     return acc;
//   }, {});

//   console.log(obj1);

//   for (key of Object.keys(obj1)) {
//     if (Object.keys(obj2).includes(key)) {
//       for (keyIn of Object.keys(obj1[key])) {
//         if (!Object.keys(obj2[key]).includes(keyIn)) {
//           obj2[key][keyIn] = obj1[key][keyIn];
//         }
//       }
//     } else {
//       obj2[key] = obj1[key];
//     }
//   }
//   let newArr = Object.keys(obj2).reduce((acc, el, ind) => {
//     acc.push({ id: +el, ...obj2[el] });
//     return acc;
//   }, []);
//   return newArr.sort((a, b) => a.id - b.id);
// };

arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
console.log(join(arr1, arr2));
// console.log(Object.values(arr1[0]));
