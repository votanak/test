const param = {
  url: "https://api.openweathermap.org/data/2.5/",
  appid: "b348f775b55e41396a34ee57fe386727",
  cityId: 2643743,
};

const getWeather = () => {
  fetch(
    `${param.url}weather?id=${param["cityId"]}&units=metric&APPID=${param.appid}`
  )
    .then((weather) => {
      return weather.json();
    })
    .then((data) => {
      console.log(data);
    });
};

getWeather();
