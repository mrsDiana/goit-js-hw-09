const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let colorId = null;

startBtn.addEventListener('click', () => {
  colorId = setInterval(colorChange, 1000);
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled', '');
});

stopBtn.addEventListener('click', () => {
  clearInterval(colorId);
  stopBtn.setAttribute('disabled', '');
  startBtn.removeAttribute('disabled', '');
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorChange() {
  return (body.style.backgroundColor = getRandomHexColor());
}
