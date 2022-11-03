const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const body = document.querySelector('body');
let colorId = null;

startBtn.addEventListener('click', () => {
  colorId = setInterval(colorChange, 1000);
  disabled (startBtn, stopBtn);
});

stopBtn.addEventListener('click', () => {
  clearInterval(colorId);
  disabled (stopBtn, startBtn);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function colorChange() {
  return (body.style.backgroundColor = getRandomHexColor());
}

function disabled (btnSet, btnRemove) {
  btnSet.setAttribute('disabled', '');
  btnRemove.removeAttribute('disabled', '');
}

