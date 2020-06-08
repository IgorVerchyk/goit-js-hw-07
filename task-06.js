const validatedPassword = document.querySelector("#validation-input");
validatedPassword.addEventListener("blur", checkForValid);
function checkForValid(event) {
  if (validatedPassword.value.length === 0) {
    validatedPassword.classList.remove("valid", "invalid");
  } else if (
    validatedPassword.value.length == validatedPassword.dataset.length
  ) {
    validatedPassword.removeAttribute("style");
    validatedPassword.classList.add("valid");
  } else {
    validatedPassword.removeAttribute("style");
    validatedPassword.classList.add("invalid");
  }
  console.dir(validatedPassword);
}
