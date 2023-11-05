fetch("users/anton.json")
  .then((response) => {
    // console.log("Успешно:", response);
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Провал:", error);
  });
