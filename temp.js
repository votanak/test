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
  indexArr = wordArr.map((el, i, arr) =>
    arr.reduce((acc, word) => (word === el ? acc + 1 : acc), 0),
  );
  return indexArr;
}

console.log(
  getCompressedString(`Привет, как у тебя дела?
Да, вроде, хорошо, а у тебя?`),
);
