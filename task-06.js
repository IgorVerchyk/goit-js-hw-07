const validatedPassword = document.querySelector("#validation-input");
validatedPassword.addEventListener("blur", checkForValid);
function checkForValid(event) {
  const passwordInput = validatedPassword.value.length;
  const passwordLenth = Number(validatedPassword.dataset.length);
  if (passwordInput === 0) {
    validatedPassword.classList.remove("valid", "invalid");
  } else if (passwordInput === passwordLenth) {
    validatedPassword.classList.add("valid");
    validatedPassword.classList.remove("invalid");
  } else {
    validatedPassword.classList.add("invalid");
    validatedPassword.classList.remove("valid");
  }
}
