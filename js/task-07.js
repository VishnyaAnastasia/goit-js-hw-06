const inputTextSize = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const changeTextSize = () => {
  text.style.fontSize = `${inputTextSize.value}px`;
};

inputTextSize.addEventListener("input", changeTextSize);
