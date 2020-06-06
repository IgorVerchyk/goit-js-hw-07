const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createIngredients = (item) => {
  const ingredientsItem = document.createElement("li");
  ingredientsItem.textContent = item;
  return ingredientsItem;
};
const ingredientsList = ingredients.map((ingredient) =>
  createIngredients(ingredient)
);
const pasteIngredientsList = document.querySelector("#ingredients");
pasteIngredientsList.append(...ingredientsList);
