const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;

  const filtred = species.filter((specie) => animal === specie.name)[0].residents;

  const validation = filtred.every((zooAnimal) => {
    const { age: animalAge } = zooAnimal;

    return animalAge >= age;
  });

  return validation;
}

module.exports = getAnimalsOlderThan;
