const list = document.querySelector("ul#categories");
console.log(`В списке ${list.childElementCount} категории`);
const listArr = document.querySelectorAll("li.item");
listArr.forEach((element) =>
  console.log(
    `Категория: ${element.children[0].textContent}, количество елементов: ${element.children[1].childElementCount}`
  )
);
