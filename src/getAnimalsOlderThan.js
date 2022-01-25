const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  
  species.filter((specie) => animal === specie.name);

  // const { residents } = specie;
}

module.exports = getAnimalsOlderThan;
