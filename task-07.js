const fontScroller = document.querySelector("#font-size-control");
const targetText = document.querySelector("#text");
fontScroller.addEventListener("input", changeFont);
function changeFont(event) {
  return targetText.setAttribute("style", `font-size: ${fontScroller.value}px`);
}
