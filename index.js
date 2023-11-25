var TimeLimitedCache = function () {
  this.values = [];
  this.timeouts = [];
  let inter = setInterval(() => {
    console.log("interval", this.values);
  }, 1);
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  let res;
  this.values.forEach((el) => {
    if (el[0] === key) {
      el = [key, value, duration];
      clearTimeout(this.timeouts[key]);
      this.values = [...this.values.filter((el) => el[0] !== key)];
      res = true;
      return;
    }
  });
  res
    ? this.values.push([key, value, duration])
    : console.log("set", this.values);
  this.timeouts[key] = setTimeout(() => {
    this.values = [...this.values.filter((el) => el[0] !== key)];
  }, duration);
  return res;
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
console.log("set(1, 42, 50)", timeLimitedCache.set(1, 42, 50)); // false
setTimeout(() => {
  console.log("set(1, 50, 100)", timeLimitedCache.set(1, 50, 100)); // false
}, 40);
setTimeout(() => {
  console.log("get(1)", timeLimitedCache.get(1)); // 42
}, 50);
setTimeout(() => {
  console.log("get(1)", timeLimitedCache.get(1)); // 42
}, 120);
setTimeout(() => {
  console.log("get(1)", timeLimitedCache.get(1)); // 42
}, 200);
setTimeout(() => {
  console.log("count()", timeLimitedCache.count()); // 1
}, 250);
