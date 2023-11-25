var TimeLimitedCache = function () {
  this.values = [];
  let inter = setInterval(() => {
    console.log("interval", this.values);
  }, 1);
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  let res;
  this.values.forEach((el) => {
    if (el[0] === key) {
      el = [key, value, duration];
      res = true;
    }
  });
  if (res) {
    return true;
  }
  this.values.push([key, value, duration]);
  setTimeout(() => {
    this.values = [...this.values.filter((el) => el[0] !== key)];
  }, duration);
  return false;
};

TimeLimitedCache.prototype.get = function (key) {
  let res;
  this.values.forEach((el) => {
    if (el[0] == key) {
      res = el[1];
      return;
    }
  });
  if (res) return res;
  return -1;
};

TimeLimitedCache.prototype.count = function () {
  return this.values.length;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 50)); // false
setTimeout(() => {
  console.log("Запрос 1", timeLimitedCache.set(1, 42, 100)); // false
}, 40);
setTimeout(() => {
  console.log("Запрос 2", timeLimitedCache.get(1)); // 42
}, 50);
setTimeout(() => {
  console.log("Запрос 3", timeLimitedCache.get(1)); // 42
}, 120);
setTimeout(() => {
  console.log("Запрос 4", timeLimitedCache.get(1)); // 42
}, 200);
setTimeout(() => {
  console.log("Запрос 5", timeLimitedCache.count()); // 1
}, 250);
