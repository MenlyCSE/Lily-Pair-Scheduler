import { fetchSheetData, dataObject } from "./fetchData.js";

const cardContainerElement = document.getElementById('card-container');
const timezoneElement = document.getElementById('timezone-filter');
const typeElement = document.getElementById('type-filter');
const availabilityElement = document.getElementById('available-filter');

function showTutorCard(name, type, availability, timezone) {
  return `
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
  return `
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
  
  let timezoneList = [...new Set(
    peopleData.map(value => value.timezone)
  )];

  console.log(timezoneList);
  

  // // O(n)
  // timezoneElement.innerHTML = timezoneList.map(zone => `
  //   <option value="${zone}">${zone}</option>
  // `).join('');

  // // O(n)
  // availabilityElement.innerHTML = availableList.map(time => `
  //   <option value="${time}">${time}</option>
  // `).join('')

  // // O(n)
  // typeElement.innerHTML = typeList.map(type => `
  //   <option value="${type}">${type}</option>
  // `).join('')
}




async function displayCards() {
  const dataLength = (await fetchDataOnce()).length;
  let cardHtml = '';

  for (let i = 0; i < dataLength; i++) {
    let person = await dataObject(i);
    const { name, type, availability, timezone } = person;
    
    if (type == 'Student')
      cardHtml += showStudentCard(name, type, availability, timezone);

    if (type == 'Tutor')
      cardHtml += showTutorCard(name, type, availability, timezone);
  }

  cardContainerElement.innerHTML = cardHtml;
}

export { displayCardFilter, displayCards };