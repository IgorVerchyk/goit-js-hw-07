let counterValue = 0;
const actualValue = document.querySelector("#value");
const doIncrement = () => {
  counterValue += 1;
  return (actualValue.textContent = counterValue);
};
const doDecrement = () => {
  counterValue -= 1;
  return (actualValue.textContent = counterValue);
};
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
incrementButton.addEventListener("click", doIncrement);
decrementButton.addEventListener("click", doDecrement);
