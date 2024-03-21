const refs = {
  start: document.querySelector('[data-start]'),
  stop: document.querySelector('[data-stop]'),
};
let timerId;

refs.start.addEventListener('click', repeater);
refs.stop.addEventListener('click', stopRepeat);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function repeater() {
  refs.start.disabled = true;
  document.body.style.backgroundColor = getRandomHexColor();
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopRepeat() {
  refs.start.disabled = false;
  clearInterval(timerId);
}
