const input = document.querySelector("input");
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

let newElementsArr = [];

const createBoxes = () => {
  if (+input.value === 0 || +input.value > 100) {
    window.alert("Enter a number from 1 to 100");
  }

  boxes.innerHTML = "";

  let width = 30;
  let height = 30;

  for (let i = 0; i < +input.value; i += 1) {
    const newElement = document.createElement("div");
    newElement.style.width = `${width}px`;
    newElement.style.height = `${height}px`;
    newElement.style.backgroundColor = getRandomHexColor();
    newElementsArr.push(newElement);

    width += 10;
    height += 10;
  }

  boxes.append(...newElementsArr);

  newElementsArr = [];
};

const destroyBoxes = () => {
  boxes.innerHTML = "";

  newElementsArr = [];
  input.value = "";
};

create.addEventListener("click", createBoxes);
destroy.addEventListener("click", destroyBoxes);
