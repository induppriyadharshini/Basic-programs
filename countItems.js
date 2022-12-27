const { map } = require("@laufire/utils/collection");

const items = {
  animals : ["dog", "cat", "wolf", "lion", "dog", "cat", "wolf", "lion", "dog", "tiger"],
  birds: ["parrot", "peacock", "parrot", "crow","parrot","sparrow", "crow" , "sparrow"]
}

const getAnimalsWithCounts = (animals) => animals
  .reduce((acc, animal) => ({ ...acc, [animal]: (acc[animal] || 0) + 1 }), {})

const getTotalCount = (items) => map(items, item => getAnimalsWithCounts(item));

const displayAnimalsWithCount = (animalsWithCount) => console.log(animalsWithCount);

const main = () => {
  const animalsWithCount = getTotalCount(items);
  displayAnimalsWithCount(animalsWithCount);
}

main();

/*
{
  animals: { dog: 3, cat: 2, wolf: 2, lion: 2, tiger: 1 },
  birds: { parrot: 3, peacock: 1, crow: 2, sparrow: 2 }
}*/
