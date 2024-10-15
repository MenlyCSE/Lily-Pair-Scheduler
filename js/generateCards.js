let cardContainer = document.getElementById('card-container');

let data = {
    'Abraham Lincoln': {
        type: 'tutor',
        available: 'Mondays, Tuesdays, Fridays, and Sundays',
        timezone: 'Mountain Standard Time'
    },
    'Jessenia Chen': {
        type: 'student',
        available: 'Sundays, Mondays, and Tuesday',
        timezone: 'Pacific Standard Time'
    },
    'Lily Guo': {
        type: 'tutor',
        available: 'Mondays, Fridays, and Saturdays',
        timezone: 'Pacific Standard Time'
    },
    'Jiaming Guan': {
        type: 'student',
        available: 'Tuesdays and Thursdays',
        timezone: 'Pacific Standard Time'
    },
    'Joyce Chen': {
        type: 'tutor',
        available: 'Wednesdays, Fridays and Sundays',
        timezone: 'Japan Standard Time'
    },
    'Menly Cherisme': {
        type: 'student',
        available: 'Sundays and Fridays',
        timezone: 'Indian Standard Time'
    },
    'Sarah Flutter': {
        type: 'tutor',
        available: 'Mondays and Fridays',
        timezone: 'British Summer Time'
    },
    'Quincy Goleman': {
        type: 'tutor',
        available: 'Mondays, Tuesdays and Thursdays',
        timezone: 'Central Standard Time'
    }
};

function displayCards() {
    for (person in data) {
        const { type, available, timezone } = data[person];

        if (type == 'tutor')
            cardContainer.innerHTML += `
                <div class="card card--primary">
                    <header class="card__header">
                      <h3>${person.length > 15 ? person.slice(0, 10) + '...' : person}</h3>
                    </header>
                    <div class="card__body">
                      <div class="list list--primary">
                        <li class="list__item">A ${type}, ready to help</li>
                        <li class="list__item">${available}</li>
                        <li class="list__item">${timezone}</li>
                      </div>
                      <input type="submit" value="Pair" class="btn btn--primary" />
                    </div>
                </div>`;


        if (type == 'student')
            cardContainer.innerHTML += `
                <div class="card card--secondary">
                    <header class="card__header">
                      <h3>${person}</h3>
                    </header>
                    <div class="card__body">
                      <div class="list list--primary">
                        <li class="list__item">A ${type}, looking for a tutor</li>
                        <li class="list__item">${available}</li>
                        <li class="list__item">${timezone}</li>
                      </div>
                      <input type="submit" value="Pair" class="btn btn--secondary" />
                    </div>
                </div>`;
    }
}

displayCards();