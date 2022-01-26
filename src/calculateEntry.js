const data = require('../data/zoo_data');

const { prices } = data;

function countEntrants(entrants) {
  const child = entrants.filter(({ age }) => age < 18).length;
  const adult = entrants.filter(({ age }) => age >= 18 && age < 50).length;
  const senior = entrants.filter(({ age }) => age >= 50).length;

  return { child, adult, senior };
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }

  const { child: childCount, adult: adultcount, senior: seniorCount } = countEntrants(entrants);
  const { child, adult, senior } = prices;

  return (childCount * child) + (adultcount * adult) + (seniorCount * senior);
}

module.exports = { calculateEntry, countEntrants };
