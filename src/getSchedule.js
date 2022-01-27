const data = require('../data/zoo_data');

const { species, hours } = data;
const days = Object.keys(hours);
const animals = species.map(({ name }) => name);

const getAnimalsAgenda = (day) => {
  if (day === 'Monday') {
    return 'The zoo will be closed!';
  }

  return species.filter(({ availability }) => availability.includes(day))
    .map(({ name }) => name);
};

const getDaySchedule = (target) => {
  const daySchedule = {};
  const { open, close } = hours[target];

  if (target === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }

  daySchedule[target] = {
    officeHour: `Open from ${open}am until ${close}pm`,
    exhibition: getAnimalsAgenda(target),
  };

  return daySchedule;
};

const animalSchedule = (animal) => species.filter(({ name }) => name === animal )[0].availability;

function getSchedule(scheduleTarget) {
  const schedule = {};
  if (days.includes(scheduleTarget)) {
    return getDaySchedule(scheduleTarget);
  }

  if (animals.includes(scheduleTarget)) {
    return animalSchedule(scheduleTarget);
  }

  Object.keys(hours).forEach((day) => {
    const { open, close } = hours[day];

    schedule[day] = {
      officeHour: open === 0 && close === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
      exhibition: getAnimalsAgenda(day),
    };
  });
  return schedule;
}

module.exports = getSchedule;
