const formRef = document.querySelector("input#name-input");
const formOutput = document.querySelector("span#name-output");
formRef.addEventListener("input", (event) => {
  formOutput.textContent =
    formRef.value.length > 0 ? formRef.value : `незнакомец`;
});
