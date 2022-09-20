const buttonDec = document.querySelector('[data-action="decrement"]');
// console.log(buttonDec);
const buttonInc = document.querySelector('[data-action="increment"]');
const value = document.querySelector("#value");

let counterValue = 0;

const valueDecrement = function () {
  counterValue -= 1;
  value.textContent = counterValue;
};

const valueIncrement = function () {
  counterValue += 1;
  value.textContent = counterValue;
};

buttonDec.addEventListener("click", valueDecrement);
buttonInc.addEventListener("click", valueIncrement);
