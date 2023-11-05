const fetchTodos = (callback) => {
  const request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4) {
      if (request.status === 200) {
        callback(undefined, request.responseText);
        return;
      }
      callback("Не удалось получить данные", undefined);
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/todos");
  request.send();
};

fetchTodos((error, data) => {
  console.log("callback runed");
});
