const data = require('../data/zoo_data');

const { species } = data;
const regions = ['NE', 'NW', 'SE', 'SW'];

function generateMap() {
  const map = {};

  regions.forEach((reg) => {
    map[reg] = species.filter(({ location }) => location === reg).map(({ name }) => name);
  });
  return map;
}

const normalNames = (sorted) => {
  const map = {};

  regions.forEach((reg) => {
    map[reg] = species.filter(({ location }) => location === reg).map(({ name }) => name)
      .map((specie) => {
        const { residents } = species.find(({ name }) => specie === name);

        if (sorted) {
          return { [specie]: residents.map(({ name }) => name).sort() };
        }
        return { [specie]: residents.map(({ name }) => name) };
      });
  });
  return map;
};

const bySexAnimals = (sex, sorted) => {
  const map = {};

  regions.forEach((reg) => {
    map[reg] = species.filter(({ location }) => location === reg).map(({ name }) => name)
      .map((specie) => {
        const { residents } = species.find(({ name }) => specie === name);
        if (sorted) {
          return { [specie]: residents.filter(({ sex: sexo }) => sexo === sex)
            .map(({ name }) => name).sort() };
        }
        return { [specie]: residents.filter(({ sex: sexo }) => sexo === sex)
          .map(({ name }) => name) };
      });
  });
  return map;
};

function getAnimalName({ includeNames, sex, sorted }) {
  if (sex) {
    return bySexAnimals(sex, sorted);
  }
  return normalNames(sorted);
}

function getAnimalMap(options) {
  if (!options || !options.includeNames || options.includeNames === false) {
    return generateMap();
  }

  if (options.includeNames) {
    return getAnimalName(options);
  }
}

module.exports = getAnimalMap;
