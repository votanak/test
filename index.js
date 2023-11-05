const fetchUsers = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

fetchUsers("users/kirill.json")
  .then((data) => {
    console.log("Успешно", data);
  })
  .catch((error) => {
    console.log("Ошибочка:", error);
  });
