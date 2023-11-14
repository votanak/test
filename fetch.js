const myRequest = new Request("del1.png");

fetch(myRequest)
  .then((response) => {
    console.log(response); // response.status = 200
    return response.blob();
  })
  .then((myBlob) => {
    const objectURL = URL.createObjectURL(myBlob);
    myImage.src = objectURL;
  })
  .catch((e) => console.log(e));
