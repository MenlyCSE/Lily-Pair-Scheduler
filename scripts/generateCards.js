import { fetchSheetData, dataObject } from "./fetchData.js";
import { showFillCards, showStudentCard, showTutorCard } from "./cardTemplates.js";

const cardContainerElement = document.getElementById('card-container');
const timezoneElement = document.getElementById('timezone-filter');
const typeElement = document.getElementById('type-filter');
const availabilityElement = document.getElementById('available-filter');
const clearFilterBtn = document.getElementById('clear-filter');

let cachedData = null;
async function fetchDataOnce() {
  if (!cachedData)
    cachedData = await fetchSheetData();

  return cachedData;
}

let emptySpaceHtml = '';
function isDatabaseEmpty(data) {
  if (!data.length)
    emptySpaceHtml = showFillCards();
}

let promises = [];
async function displayCardFilter() {
  let data = await fetchDataOnce();
  let dataLength = data.length;

  if (promises.length === 0) {
    for (let i = 0; i < dataLength; i++)
      promises[i] = dataObject(i);
  }

  let peopleData = await Promise.all(promises);

  let typeList = [
    'Student', 'Tutor'
  ];

  let timezoneHtml = '';
  let timezoneList = [...new Set(
    peopleData.map(person => person.timezone)
  )];

  let availableHtml = '';
  let availableList = [...new Set(
    peopleData.map(person => person.availability)
  )];

  for (let i = 1; i < timezoneList.length; i++) {
    timezoneHtml += `
      <option value="${timezoneList[i]}">${timezoneList[i]}</option>`;
  }

  for (let i = 1; i < availableList.length; i++) {
    availableHtml += `
      <option value="${availableList[i]}">${availableList[i]}</option>`;
  }

  timezoneElement.innerHTML += timezoneHtml;
  availabilityElement.innerHTML += availableHtml;
  typeElement.innerHTML += typeList.map(
    type => `<option value="${type}">${type}</option>`
  );
}

async function displayCards() {
  let data = await fetchDataOnce();
  let dataLength = data.length;
  let cardHtml = '';

  isDatabaseEmpty(data);
  cardContainerElement.innerHTML += emptySpaceHtml;

  if (promises.length === 0) {
    for (let i = 0; i < dataLength; i++)
      promises[i] = dataObject(i);
  }

  let peopleData = await Promise.all(promises);

  for (let i = 0; i < dataLength; i++) {
    let person = peopleData[i];
    let { name, email, type, availability, timezone } = person;

    if (type == 'Student')
      cardHtml += showStudentCard(name, email, type, availability, timezone);

    if (type == 'Tutor')
      cardHtml += showTutorCard(name, email, type, availability, timezone);
  }

  cardContainerElement.innerHTML = cardHtml;
}

function returnFilteredData(peopleData) {
  let selectedTimezone = timezoneElement.value;
  let selectedType = typeElement.value;
  let selectedAvailability = availabilityElement.value;

  let filteredData = [];
  for (let i = 0; i < peopleData.length; i++) {
    let person = peopleData[i];
    let matchTimezone = !selectedTimezone || person.timezone === selectedTimezone;
    let matchType = !selectedType || person.type === selectedType;
    let matchAvailability = !selectedAvailability || person.availability === selectedAvailability;

    if (matchTimezone && matchType && matchAvailability) {
      filteredData.push(person);
    }
  }
  return filteredData;
}

async function filterDisplayCards() {
  let data = await fetchDataOnce();
  let dataLength = data.length;
  emptySpaceHtml = '';

  if (promises.length === 0) {
    for (let i = 0; i < dataLength; i++)
      promises[i] = dataObject(i);
  }

  let peopleData = await Promise.all(promises);
  let filteredData = returnFilteredData(peopleData);

  returnFilteredData(peopleData);
  isDatabaseEmpty(filteredData);

  let cardHtml = '';
  for (let i = 0; i < filteredData.length; i++) {
    let person = filteredData[i];
    let { name, type, availability, timezone } = person;

    if (type == 'Student')
      cardHtml += showStudentCard(name, type, availability, timezone);

    if (type == 'Tutor')
      cardHtml += showTutorCard(name, type, availability, timezone);
  }

  cardContainerElement.innerHTML = cardHtml;
  cardContainerElement.innerHTML += emptySpaceHtml;
}

function resetFilters() {
  timezoneElement.value = '';
  typeElement.value = '';
  availabilityElement.value = '';

  displayCards();
}

timezoneElement.addEventListener('change', () => filterDisplayCards());
typeElement.addEventListener('change', () => filterDisplayCards());
availabilityElement.addEventListener('change', () => filterDisplayCards());
clearFilterBtn.addEventListener('click', () => resetFilters());

export { displayCardFilter, displayCards };