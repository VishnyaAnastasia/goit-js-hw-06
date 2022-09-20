const allItems = document.querySelectorAll(".item");
const allItemsQuantity = allItems.length;

console.log(`Number of categories: ${allItemsQuantity}`);

allItems.forEach((element) => {
  const elementTitle = element.querySelector("h2").textContent;

  const oneTitleElements = element.querySelectorAll("li");
  const oneTitleElemntsQuantity = oneTitleElements.length;

  console.log(`Category: ${elementTitle}`);
  console.log(`Elements: ${oneTitleElemntsQuantity}`);
});
