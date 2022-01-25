const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (employeeName === undefined) {
    return {};
  }

  return employees.find((employee) => {
    const { firstName, lastName } = employee;

    return firstName === employeeName || lastName === employeeName;
  });
}

module.exports = getEmployeeByName;
