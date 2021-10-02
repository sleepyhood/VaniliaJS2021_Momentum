const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  // if (hours <= 11 && minutes <= 59) {
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  // } else {
  // clock.innerText = `${hours-12}:${minutes}`;
  // }
}

getClock();
setInterval(getClock, 1000);

// clock.innerText = "DWWD";
