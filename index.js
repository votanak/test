// var join = function (arr1, arr2) {
//   arr2.forEach((obj2, ind2) => {
//     // цикл по второму массиву obj2 - объект из массива arr2
//     let found = false;
//     arr1.forEach((obj1, ind1) => {
//       // проходимся по объектам первого массива obj1 - объект из массива arr1
//       if (obj1.id === obj2.id) {
//         // если id совпадает, то ...
//         for (el in obj2) {
//           // ... записываем все пары объекта из arr2 в объект из arr1
//           obj1[el] = obj2[el];
//         }
//         found = true; //флаг нахождения obj2 в arr1
//       }
//     });
//     if (!found) arr1.push(obj2);
//   });
//   return arr1.sort((a, b) => a.id - b.id);
// };

var join = function (arr1, arr2) {
  let arr1Mod = arr1.map((el) => {
    const { id, ...rest } = el;
    return { [id]: rest };
  });
  let arrId1;
  let arrId2 = arr2.map((el) => el.id);
  // let notEq = arrId1.filter((el) => !arrId2.includes(el));
  console.log(arr1Mod);
  // console.log('notEq', notEq);
  arr2.forEach((obj2, ind2) => {
    // цикл по второму массиву obj2 - объект из массива arr2
    let found = false;
    arr1.forEach((obj1, ind1) => {
      // проходимся по объектам первого массива obj1 - объект из массива arr1
      if (obj1.id === obj2.id) {
        // если id совпадает, то ...
        for (el in obj2) {
          // ... записываем все пары объекта из arr2 в объект из arr1
          obj1[el] = obj2[el];
        }
        found = true; //флаг нахождения obj2 в arr1
      }
    });
    if (!found) arr1.push(obj2);
  });
  return arr1.sort((a, b) => a.id - b.id);
};

arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
console.log(join(arr1, arr2));
