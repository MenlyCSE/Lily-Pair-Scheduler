const cardContainer = document.getElementById('card-container');
const timezone = document.getElementById('timezone-filter');
const type = document.getElementById('type-filter');
const available = document.getElementById('available-filter');

function displayTutorCard(name, type, availability, timezone) {
    return cardContainer.innerHTML += `
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

function displayStudentCard(name, type, availability, timezone) {
    return cardContainer.innerHTML += `
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

async function fetchSheetData() {
    try {
        const webAppURL = `https://script.google.com/macros/s/AKfycbwUDAAIYTwGhtEh6EgoWce7aAxUFXO35DyUorX_4yG2kZzlO-CzxUBx8op50mKIBpo/exec`;
        const response = await fetch(webAppURL);
        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
            let name = data[i][0];
            let email = data[i][1];
            let weChatID = data[i][2];
            let type = data[i][3];
            let availability = data[i][4];
            let timezone = data[i][5];

            if (type === 'Student') {
                displayStudentCard(name, type, availability, timezone);
            }

            if (type == 'Tutor') {
                displayTutorCard(name, type, availability, timezone);
            }
        }

    } catch (error) {
        console.log(error);
    }
}

fetchSheetData();


