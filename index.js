var functions = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 1500)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
];

var promiseAll = function (functions) {
  const start = new Data();
  let inter = setInterval(() => {}, 1);
  // return  Promise((res) => {
  let as = async () => {
    let s0 = await functions[0]();
    let s1 = await functions[1]();
    let s2 = await functions[2]();
    return [s0, s1, s2];
  };
  // });
};
