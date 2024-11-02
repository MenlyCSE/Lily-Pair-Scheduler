const cardContainer = document.getElementById('card-container');
const timezone = document.getElementById('timezone-filter');
const type = document.getElementById('type-filter');
const available = document.getElementById('available-filter');

// Method: organize into object, include fetch/post functions, etc
async function fetchSheetData() {
    try {
        const webAppURL = `https://script.google.com/macros/s/AKfycbwUDAAIYTwGhtEh6EgoWce7aAxUFXO35DyUorX_4yG2kZzlO-CzxUBx8op50mKIBpo/exec`;
        const response = await fetch(webAppURL);
        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

fetchSheetData(); 

const data = {
    'Abraham': {
        type: 'tutor',
        available: 'Mondays, Tuesdays, Fridays, and Sundays',
        timezone: 'Mountain Standard Time'
    },
    'Jessenia': {
        type: 'student',
        available: 'Sundays, Mondays, and Tuesday',
        timezone: 'Pacific Standard Time'
    },
    'Lily': {
        type: 'tutor',
        available: 'Mondays, Fridays, and Saturdays',
        timezone: 'Pacific Standard Time'
    },
    'Jiaming': {
        type: 'student',
        available: 'Tuesdays and Thursdays',
        timezone: 'Pacific Standard Time'
    },
    'Joyce': {
        type: 'tutor',
        available: 'Wednesdays, Fridays and Sundays',
        timezone: 'Japan Standard Time'
    },
    'Menly': {
        type: 'student',
        available: 'Sundays and Fridays',
        timezone: 'Indian Standard Time'
    },
    'Sarah': {
        type: 'tutor',
        available: 'Mondays and Fridays',
        timezone: 'British Summer Time'
    },
    'Quincy': {
        type: 'tutor',
        available: 'Mondays, Tuesdays and Thursdays',
        timezone: 'Central Standard Time'
    }
};

function displayTutorCards() {
    return Object.keys(data)
            .filter(person => data[person].type === 'tutor')
            .map(person => `
                    <div class="card card--primary">
                        <header class="card__header">
                          <h3>${person}</h3>
                        </header>
                        <div class="card__body">
                          <div class="list list--primary">
                            <li class="list__item">A ${data[person].type} ready to help</li>
                            <li class="list__item">${data[person].available}</li>
                            <li class="list__item">${data[person].timezone}</li>
                          </div>
                          <input type="submit" value="Pair" class="btn btn--primary" />
                        </div>
                    </div>`
            ).join('')
}

function displayStudentCards() {
    return Object.keys(data)
            .filter(person => data[person].type === 'student')
            .map(person => `
                    <div class="card card--secondary">
                        <header class="card__header">
                          <h3>${person}</h3>
                        </header>
                        <div class="card__body">
                          <div class="list list--primary">
                            <li class="list__item">A ${data[person].type} looking for a tutor</li>
                            <li class="list__item">${data[person].available}</li>
                            <li class="list__item">${data[person].timezone}</li>
                          </div>
                          <input type="submit" value="Pair" class="btn btn--secondary" />
                        </div>
                    </div>`
            ).join('')
}

function showCards() {
    cardContainer.innerHTML += displayStudentCards();
    cardContainer.innerHTML += displayTutorCards();
}

showCards();