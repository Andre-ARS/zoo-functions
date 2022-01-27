const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const animalId = employees.find(({ id: employeeId }) => employeeId === id).responsibleFor[0];
  const older = species.find(({ id: idNum }) => idNum === animalId).residents
    .reduce((bigger, current) => {
      if (bigger.age > current.age) {
        return bigger;
      }
      return current;
    });

  return [older.name, older.sex, older.age];
}

module.exports = getOldestFromFirstSpecies;
