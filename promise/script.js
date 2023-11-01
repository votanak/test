const param = {
  url: "https://api.openweathermap.org/data/2.5/",
  appid: "b348f775b55e41396a34ee57fe386727",
  cityId: 2643743,
};

const f1 = async () => {
  const requestHeaders = new Headers();
  requestHeaders.append("apikey", "03508a32621d549c");
  const res = await fetch(`https://api.itgid.info/api/26/employee/read`, {
    method: "GET",
    headers: requestHeaders,
  });
  const result = await res.json();
  console.log(result);
};

f1();
