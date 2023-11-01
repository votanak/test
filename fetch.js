const promise = new Promise((resolve, reject) => {
  resolve("success");
});
promise.then((res) => {
  console.log(res);
});
console.log(4);
