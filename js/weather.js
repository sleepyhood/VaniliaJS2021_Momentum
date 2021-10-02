const API_KEY = "3cd0378a9a2d1b42a3e86ca4d47ff6c7";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  console.log(position);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;

  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      // const icon = document.querySelector("#weather img:nth-child(3)");

      // icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2l.png`;
      city.innerText = data.name;

      weather.innerText = `${data.weather[0].main} / ${data.main.temp} °C`;
      // icon.innerHTML = icon;
    });
} // 위도와 경도를 얻어냄

function onGeoError() {
  alert("Can't find location");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
