const data = require('../data/zoo_data');

const { species } = data;

const countByName = ({ specie }) => species.find(({ name }) => name === specie).residents.length;

const countBySex = ({ specie, sex }) => {
 return species.find(({ name }) => name === specie).residents.filter(({ sex: sexo }) => sexo === sex).length;
}

function countAnimals(animal) {
  const counter = {};

  if (typeof animal !== 'object') {
    species.forEach(({ name, residents }) => {counter[name] = residents.length});

    return counter;
  }

  return Object.keys(animal).length === 1 ? countByName(animal) : countBySex(animal);
}

module.exports = countAnimals;
