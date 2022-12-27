const { map } = require("@laufire/utils/collection");

const animals = ["dog", "cat", "wolf", "lion", "dog", "cat", "wolf", "lion", "dog", "tiger"];


const getAnimalsWithCounts = (animals) => animals
  .reduce((acc, animal) => ({ ...acc, [animal]: (acc[animal] || 0) + 1 }), {})

const displayAnimalsWithCount = (animalsWithCount) => console.log(animalsWithCount);

const main = () => {
  const animalsWithCount = getAnimalsWithCounts(animals)
  displayAnimalsWithCount(animalsWithCount);
}

main();

/*
{
  animals: { dog: 3, cat: 2, wolf: 2, lion: 2, tiger: 1 },
  birds: { parrot: 3, peacock: 1, crow: 2, sparrow: 2 }
}*/
