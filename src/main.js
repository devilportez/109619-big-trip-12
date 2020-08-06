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

const getRandomInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateMockData = () => {
  return {
    pointType: pointTypes[getRandomInteger(0, pointTypes.length - 1)],
    destination: cities[getRandomInteger(0, cities.length - 1)],
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
