const data = require('../data/zoo_data');

const { species, employees } = data;

const getEmployee = ({ name, id }) => employees
  .find(({ firstName, lastName, id: employeeId }) => firstName === name
    || lastName === name || employeeId === id);
const getLocation = (animals) => animals.map((specie) => species
  .find(({ id }) => specie === id).location);

const getSpecies = (responsibleFor) => responsibleFor.map((specie) => species
  .find(({ id }) => specie === id).name);

const employeeCoverage = ({ firstName, lastName, id, responsibleFor }) => ({
  id,
  fullName: `${firstName} ${lastName}`,
  species: getSpecies(responsibleFor),
  locations: getLocation(responsibleFor),
});

function getEmployeesCoverage(options = undefined) {
  const employeeInfo = [];

  if (options && getEmployee(options) === undefined) {
    throw new Error('Informações inválidas');
  }

  if (options) {
    return employeeCoverage(getEmployee(options));
  }

  employees.forEach((employee) => {
    employeeInfo.push(employeeCoverage(employee));
  });

  return employeeInfo;
}

module.exports = getEmployeesCoverage;
