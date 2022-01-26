const data = require('../data/zoo_data');

const stephanieId = '9e7d4524-363c-416a-8759-8aa7e50c0992';
const olaId = 'fdb2543b-5662-46a7-badc-93d960fdc0a8';
const burlId = '0e7b460e-acf4-4e17-bcb3-ee472265db83';
const managersIds = [stephanieId, olaId, burlId];

function isManager(id) {
  return managersIds.some((ids) => ids === id);
}

function getRelatedEmployees(managerId) {
  const relatedEmployees = [];
  const { employees } = data;

  if (isManager(managerId)) {
    const filtred = employees.filter(({ managers }) => managers.includes(managerId));
    filtred.forEach(({ firstName, lastName }) => relatedEmployees.push(`${firstName} ${lastName}`));

    return relatedEmployees;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
