const body = document.querySelector("body");
const colorValue = document.querySelector("span");
const changeColorButton = document.querySelector("button");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const changeBodyColor = () => {
  body.style.backgroundColor = getRandomHexColor();
  colorValue.textContent = body.style.backgroundColor;
};
changeColorButton.addEventListener("click", changeBodyColor);
