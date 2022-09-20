const userForm = document.querySelector(".login-form");

const userLogin = (event) => {
  event.preventDefault();
  const userEmail = userForm.elements.email.value;
  const userPassword = userForm.elements.password.value;
  if (userEmail === "" || userPassword === "") {
    window.alert("Fill in all the blanks");
  }
  console.log({
    userEmail,
    userPassword,
  });
  userForm.reset();
};

userForm.addEventListener("submit", userLogin);
