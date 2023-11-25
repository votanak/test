var values = [];
var TimeLimitedCache = function () {
  setInterval(() => {
    let newValues = [];
    values.forEach((el, ind) => {
      el[2] -= 1;
      if (el[2] <= 0) newValues.push(el[0]);
    }, 1);
    values = values.filter((el) => newValues.includes(el[0]));
  });
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  values.forEach((el, ind) => {
    if (el[0] === key[0]) {
      el[0] = [key, value, duration];
      return true;
    }
  });
  values.push([key, value, duration]);
  return false;
};

TimeLimitedCache.prototype.get = function (key) {
  values.forEach((el, ind) => {
    if (el[0] === key[0]) return el[1];
  });
  return -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return values.length;
};

const timeLimitedCache = new TimeLimitedCache();
timeLimitedCache.set(1, 42, 1000); // false
timeLimitedCache.get(1); // 42
timeLimitedCache.count(); // 1
