const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const counter = {}

  if (typeof animal !== 'object') {
    species.forEach(({ name, residents }) => counter[name] = residents.length);
  
    return counter; 
  }

  return Object.keys(animal).length === 1 ? countByName(animal) : countBySex(animal);
}

const countByName = ({ specie }) => species.find(({ name }) => name === specie).residents.length;

const countBySex = ({ specie, sex }) => species.find(({ name }) => name === specie).residents.filter(({ sex:sexo }) => sexo === sex).length;

module.exports = countAnimals;
