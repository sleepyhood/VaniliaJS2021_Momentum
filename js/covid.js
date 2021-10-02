const APIKEY = "GUL2x6d7SMlTRHgVQf8CYowWAzNrm41cI";

const url = `https://api.corona-19.kr/korea/?serviceKey=${APIKEY}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let str = data.updateTime;

    const upTime = document.querySelector("#updateTime");
    const justTime = str.substr(21, str.length - 1);
    upTime.innerText = justTime;
    // const city = document.querySelector("#weather span:first-child");
    // const weather = document.querySelector("#weather span:last-child");
    // city.innerText = data.name;
    // weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
  });

const url1 = `https://api.corona-19.kr/korea/country/new/?serviceKey=${APIKEY}`;

fetch(url1)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.korea);
    const covidNew = document.querySelector("#covid19New");
    const covidTo = document.querySelector("#covid19To");

    const vall = document.querySelector("#Vall");
    const Iall = document.querySelector("#Iall");
    covidNew.innerText = `😷 ${data.korea.newCase} 명`;
    covidTo.innerText = `총: ${data.korea.totalCase}(+${data.korea.newCase})`;
    // vall.innerText = `${data.korea.totalCase}`;
    // Iall.innerText = `(+${data.korea.newCase})`;
  });
