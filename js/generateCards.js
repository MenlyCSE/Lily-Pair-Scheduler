import { fetchSheetData, dataObject } from "./fetchData.js";

const cardContainerElement = document.getElementById('card-container');
const timezoneElement = document.getElementById('timezone-filter');
const typeElement = document.getElementById('type-filter');
const availabilityElement = document.getElementById('available-filter');

function showTutorCard(name, type, availability, timezone) {
  return cardContainerElement.innerHTML += `
        <div class="card card--primary">
            <header class="card__header">
              <h3>${name}</h3>
            </header>
            <div class="card__body">
              <div class="list list--primary">
                <li class="list__item">A ${type} ready to help</li>
                <li class="list__item">${availability}</li>
                <li class="list__item">${timezone}</li>
              </div>
              <input type="submit" value="Pair" class="btn btn--primary" />
            </div>
        </div>`;
}

function showStudentCard(name, type, availability, timezone) {
  return cardContainerElement.innerHTML += `
        <div class="card card--secondary">
            <header class="card__header">
              <h3>${name}</h3>
            </header>
            <div class="card__body">
              <div class="list list--primary">
                <li class="list__item">A ${type} ready to help</li>
                <li class="list__item">${availability}</li>
                <li class="list__item">${timezone}</li>
              </div>
              <input type="submit" value="Pair" class="btn btn--secondary" />
            </div>
        </div>`;
}

let timezoneList = [];
let typeList = [];
let availableList = [];

async function displayCardFilter() {
  const dataLength = (await fetchSheetData()).length;

  for (let i = 0; i < dataLength; i++) {
    let person = await dataObject(i);
    const { type, availability, timezone } = person;

    timezoneList[i] = timezone;
    availableList[i] = availability;
    typeList[i] = type;
  }

  timezoneElement.innerHTML += timezoneList.map(zone => `
    <option value="${zone}">${zone}</option>
  `).join('');

  availabilityElement.innerHTML += availableList.map(time => `
    <option value="${time}">${time}</option>
  `).join('')

  typeElement.innerHTML += typeList.map(type => `
    <option value="${type}">${type}</option>
  `).join('')
}


async function displayCards() {
  const dataLength = (await fetchSheetData()).length;

  for (let i = 0; i < dataLength; i++) {
    let person = await dataObject(i);
    const { name, type, availability, timezone } = person;
    
    if (type == 'Student')
      showStudentCard(name, type, availability, timezone);

    if (type == 'Tutor')
      showTutorCard(name, type, availability, timezone);
  }
}

export { displayCardFilter, displayCards };