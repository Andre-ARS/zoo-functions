const data = require('../data/zoo_data');

const { species } = data;

function getAnimalName() {
  const ne = species.filter(({ location }) => location === 'NE').map(({ name }) => name);
  const nw = species.filter(({ location }) => location === 'NW').map(({ name }) => name);
  const se = species.filter(({ location }) => location === 'SE').map(({ name }) => name);
  const sw = species.filter(({ location }) => location === 'SW').map(({ name }) => name);
  
  const NE = ne.map((specie) => {
    const { residents } = species.find(({ name }) => specie === name);

    const resident = { [specie]: residents.map((animal, index) => residents[index].name) } 

    return resident;
  });
  const NW = 'l';
  const SE = 'k';
  const SW = 'j';

  return { NE, NW, SE, SW };
}

function getAnimalMap(options) {
  if (typeof options === 'object') {
    getAnimalName(map, options);
  }

  const regions = ['NE', 'NW', 'SE', 'SW'];
  const map = {};

  regions.forEach((reg) => {
  map[reg] = species.filter(({ location }) => location === reg).map(({ name }) => name);
  });
  return map;
}

module.exports = getAnimalMap;
console.log(getAnimalMap());
console.log(getAnimalName());