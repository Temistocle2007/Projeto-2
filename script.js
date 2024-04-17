const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start-btn');

let totalSeconds = 0;
let countdown;

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

function updateTimer() {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  hoursDisplay.textContent = formatTime(hours);
  minutesDisplay.textContent = formatTime(minutes);
  secondsDisplay.textContent = formatTime(seconds);

  if (totalSeconds === 0) {
    clearInterval(countdown);
  } else {
    totalSeconds--;
  }
}

function startTimer() {
  if (!countdown) {
    countdown = setInterval(updateTimer, 1000);
  }
}

startButton.addEventListener('click', startTimer);
