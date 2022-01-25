const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const { species } = data;
  const obtainedSpecie = [];

  species.forEach((specie) => {
    const { id } = specie;

    if (id === ids[0] || id === ids[1]) {
      obtainedSpecie.push(specie);
    }
  });

  return obtainedSpecie;
}

module.exports = getSpeciesByIds;
