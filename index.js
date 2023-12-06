var join = function (arr1, arr2) {
  arr2.forEach((el2, ind2) => {
    let found = false;
    arr1.forEach((el1, ind1) => {
      if (el1.id === el2.id) {
        arr1[ind1][key] = arr2[ind2][key];
        found = true;
      }
    });
    if (!found) arr1.push(el2);
  });
  return arr1.sort((a, b) => a.id - b.id);
};
arr1 = [{ id: 1, b: { b: 94 }, v: [4, 3], y: 48 }];
arr2 = [{ id: 1, b: { c: 84 }, v: [1, 3] }];
console.log(join(arr1, arr2));
