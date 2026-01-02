const buttonChange = document.querySelector('button.change-color');
const colorOutput = document.querySelector('span.color');
const bodyElement = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonChange.addEventListener('click', () => {
  const newColor = getRandomHexColor();
  bodyElement.style.backgroundColor = newColor;
  colorOutput.textContent = newColor;
});
