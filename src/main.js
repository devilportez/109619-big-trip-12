import {render} from './utils.js';
import {tripInfo} from './view/trip-info.js';
import {tabs} from './view/tabs.js';
import {filters} from './view/filters.js';
import {sort} from './view/sort.js';
import {tripDays} from './view/trip-days.js';
import {day} from './view/day.js';
import {dayInfo} from './view/day-info.js';
import {eventsList} from './view/events-list.js';
import {form} from './view/form.js';
import {event} from './view/event.js';

const PLACE_POINT_AMOUNT = 3;

const pageBody = document.querySelector(`.page-body`);
const tripMain = pageBody.querySelector(`.trip-main`);
const tripControls = tripMain.querySelector(`.trip-controls`);
const tripEvents = pageBody.querySelector(`.trip-events`);

const pointTypes = [
  `Taxi`,
  `Bus`,
  `Train`,
  `Ship`,
  `Transport`,
  `Drive`,
  `Flight`,
  `Check`,
  `Sightseeing`,
  `Restaurant`,
];

const cities = [
  `New York`,
  `Seattle`,
  `Toronto`,
  `Vancuver`,
];

const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus.`

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateMockData = () => {
  return {
    pointType: pointTypes[getRandomInteger(0, pointTypes.length - 1)],
    destination: cities[getRandomInteger(0, cities.length - 1)],
    destinationInfo: {
      description,
      photo: `http://picsum.photos/248/152?r=${Math.random()}`
    },
  };
};

console.log(generateMockData());

render(tripInfo, tripMain, `afterbegin`);
render(tabs, tripControls, `beforeend`);
render(filters, tripControls, `beforeend`);
render(sort, tripEvents, `beforeend`);
render(tripDays, tripEvents, `beforeend`);

const tripDaysElement = tripEvents.querySelector(`.trip-days`);

render(day, tripDaysElement, `beforeend`);

const dayElement = tripDaysElement.querySelector(`.day`);

render(dayInfo, dayElement, `beforeend`);
render(eventsList, dayElement, `beforeend`);

const eventsListElement = dayElement.querySelector(`.trip-events__list`);

render(form, eventsListElement, `beforeend`);

for (let i = 0; i < PLACE_POINT_AMOUNT; i++) {
  render(event, eventsListElement, `beforeend`);
}
