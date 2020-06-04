const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createIngredientsRef = (item) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = item;
  return ingredientsItem;
};
const ingredientsList = ingredients.map((ingredient) =>
  createIngredientsRef(ingredient)
);
const ingredintsListRef = document.querySelector("#ingredients");
ingredintsListRef.append(...ingredientsList);
