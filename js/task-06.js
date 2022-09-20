const inputData = document.querySelector("#validation-input");

const changeBorderColor = () => {
  if (+inputData.value.length === +inputData.dataset.length) {
    inputData.classList.add("valid");
    inputData.classList.remove("invalid");
  } else {
    inputData.classList.add("invalid");
    inputData.classList.remove("valid");
  }
};
inputData.addEventListener("blur", changeBorderColor);
