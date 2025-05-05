function getCompressedString(text) {
  let text1;
  text1 = text.split(' ').join('_ _');
  text1 = text1.split(',').join('_,_');
  text1 = text1.split('.').join('_._');
  text1 = text1.split('?').join('_?_');
  text1 = text1.split('!').join('_!_');
  fullArr = text1.split('_').filter((el) => el !== '');
  wordArr = fullArr.filter(
    (el) => el !== ' ' && el !== '.' && el !== ',' && el != '?' && el !== '!',
  );
  indexArr = wordArr
    .map((el, i, arr) => [
      el,
      arr.reduce((acc, word) => (word === el ? acc + 1 : acc), 0),
    ])
    .sort((a, b) => b[1] - a[1]);
  indexArrUnique = [...new Set(indexArr.map(JSON.stringify))].map(JSON.parse);
  console.log('ful: ', fullArr);

  res = fullArr
    .map((el) =>
      indexArrUnique.findIndex((el1) => el === el1[0]) >= 0
        ? indexArrUnique.findIndex((el1) => el === el1[0])
        : el,
    )
    .join('');
  return res;
}

console.log(
  getCompressedString(`Привет, как у тебя дела?
  Да, вроде, хорошо, а у тебя?`),
);
