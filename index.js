var funcs = [
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 1500)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
];

var promiseAll = async function (functions) {
  let mass = [];
  for (let i = 0; i < functions.length; i += 1) {
    try {
      functions[i]();
    } catch {
      return;
    }
    mass.push(el);
  }
  console.log(mass);
};

promiseAll(funcs);
