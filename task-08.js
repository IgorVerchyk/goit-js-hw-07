const inputRef = document.querySelector("#controls input");
const createRef = document.querySelector('button[data-action="render"]');
const removeRef = document.querySelector('button[data-action="destroy"]');
const targetBox = document.querySelector("#boxes");
createRef.addEventListener("click", () => createBoxes(inputRef.value));
removeRef.addEventListener("click", removeboxes);
function removeboxes() {
  targetBox.innerHTML = "";
}
function createBoxes(amount) {
  const blancArr = [];
  for (let i = 0; i < amount; i += 1) {
    const newDiv = document.createElement("div");
    const newDivSize = 30 + i * 10;
    newDiv.style.width = `${newDivSize}px`;
    newDiv.style.height = `${newDivSize}px`;
    newDiv.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
    blancArr.push(newDiv);
  }
  targetBox.append(...blancArr);
}
