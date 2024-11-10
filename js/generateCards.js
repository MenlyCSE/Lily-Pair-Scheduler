import { fetchSheetData, dataObject } from "./fetchData.js";
import { showStudentCard, showTutorCard } from "./cardTemplates.js";

const cardContainerElement = document.getElementById('card-container');
const timezoneElement = document.getElementById('timezone-filter');
const typeElement = document.getElementById('type-filter');
const availabilityElement = document.getElementById('available-filter');

let cachedData = null;
async function fetchDataOnce() {
  if (!cachedData)
    cachedData = await fetchSheetData();

  return cachedData;
}

let promises = [];
async function displayCardFilter() {
  let data = await fetchDataOnce();
  let dataLength = data.length;

  if (promises.length === 0)
    for (let i = 0; i < dataLength; i++)
      promises[i] = dataObject(i);

  let peopleData = await Promise.all(promises);
  
  let typeList = [
    'Type', 'Student', 'Tutor'
  ];

  let timezoneList = [...new Set(
    peopleData.map(person => person.timezone)
  )];

  let availableList = [...new Set(
    peopleData.map(person => person.availability)
  )];

  timezoneElement.innerHTML = timezoneList.map(zone => `
    <option value="${zone}">${zone}</option>
  `).join('');

  availabilityElement.innerHTML = availableList.map(time => `
    <option value="${time}">${time}</option>
  `).join('');

  typeElement.innerHTML = typeList.map(type => `
    <option value="${type}">${type}</option>
  `).join('');
}

async function displayCards() {
  let data = await fetchDataOnce();
  let dataLength = data.length;
  let cardHtml = '';

  if (promises.length === 0)
    for (let i = 0; i < dataLength; i++)
      promises[i] = dataObject(i);

  let peopleData = await Promise.all(promises);
  for (let i = 0; i < dataLength; i++) {
    let person = peopleData[i];
    let { name, type, availability, timezone } = person;

    if (type == 'Student')
      cardHtml += showStudentCard(name, type, availability, timezone);

    if (type == 'Tutor' )
      cardHtml += showTutorCard(name, type, availability, timezone);
  }

  cardContainerElement.innerHTML = cardHtml;
}

export { displayCardFilter, displayCards };