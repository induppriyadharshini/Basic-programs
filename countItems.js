const { map } = require("@laufire/utils/collection");

const items = {
  animals : ["dog", "cat", "wolf", "lion", "dog", "cat", "wolf", "lion", "dog", "tiger"],
  birds: ["parrot", "peacock", "parrot", "crow","parrot","sparrow", "crow" , "sparrow"]
}

const getItemsWithCounts = (items) => items
  .reduce((acc, item) => ({ ...acc, [item]: (acc[item] || 0) + 1 }), {})

const getTotalCount = (items) => map(items, item => getItemsWithCounts(item));

const displayItemsWithCount = (itemsWithCount) => console.log(itemsWithCount);

const main = () => {
  const itemsWithCount = getTotalCount(items);
  displayItemsWithCount(itemsWithCount);
}

main();
