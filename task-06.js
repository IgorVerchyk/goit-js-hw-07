const validatedPassword = document.querySelector("#validation-input");
validatedPassword.addEventListener("blur", checkForValid);
function checkForValid(event) {
  return validatedPassword.value.length === 0
    ? validatedPassword.classList.remove("valid", "invalid")
    : validatedPassword.value.length >= validatedPassword.dataset.length
    ? validatedPassword.classList.add("valid")
    : validatedPassword.classList.add("invalid");
}
