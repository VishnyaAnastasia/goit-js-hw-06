const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

const output = () => {
  if (inputName.value === "") {
    outputName.textContent = "Anonymous";
    return;
  }
  outputName.textContent = inputName.value;
};

inputName.addEventListener("input", output);
