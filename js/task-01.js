const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll("li.item");

const category = document.querySelectorAll(".item h2");

let categoryCount = 0;

categoryItems.forEach(() => {
  categoryCount += 1;
});

console.log(`Number of categories: ${categoryCount}`);

categoryItems.forEach((categoryItem) => {
  const categoryTitle = categoryItem.querySelector("h2").textContent;
  const categoryElements = categoryItem.querySelectorAll("li").length;

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryElements}`);
});
