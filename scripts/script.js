const timerDays = document.querySelector("#days");
const timerHours = document.querySelector("#hours");
const timerMinutes = document.querySelector("#minutes");
const timerSeconds = document.querySelector("#seconds");

function handleTimerTick() {
  const date = new Date();
  const year = date.getFullYear();
  const newYearDate = new Date(`${year + 1}-01-01 00:00:00`);
  const diffDate = newYearDate - date;

  const days = Math.floor(diffDate / 1000 / 60 / 60 / 24);
  const hours = Math.floor((diffDate / 1000 / 60 / 60) % 24);
  const minutes = Math.floor((diffDate / 1000 / 60) % 60);
  const seconds = Math.floor((diffDate / 1000) % 60);

  const formattedDays = days.toString().padStart(2, "0");
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = seconds.toString().padStart(2, "0");

  timerDays.textContent = formattedDays;
  timerHours.textContent = formattedHours;
  timerMinutes.textContent = formattedMinutes;
  timerSeconds.textContent = formattedSeconds;

  document.querySelector(".title").textContent = `Новий Рік ${year + 1}🎉`;
}

setInterval(handleTimerTick, 1000);
handleTimerTick();
