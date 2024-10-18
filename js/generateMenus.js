function displaySelectMenu() {
    const checkboxMenu = document.getElementById('checkbox-menu');
    let days = [
        'Mondays', 'Tuesdays', 'Wednesdays',
        'Thursdays', 'Fridays', 'Saturdays',
        'Sundays'
    ];

    const checkBoxItems = days.map(day => `
        <li>
            <input type="checkbox" class="checkbox--primary" id="${day}" />
            <label for="${day}" class="label label--secondary">${day}</label>
        </li>`
    ).join('');

    checkboxMenu.innerHTML += checkBoxItems;
}

function displayRadioMenu() {
    const radioMenu = document.getElementById('radio-menu')
    let types = ['Tutor', 'Student'];

    const radioMenuItems = types.map(type => `
        <li>
            <input 
                type="radio" 
                name="type" 
                class="radiobox--primary" 
                id="${type.toLowerCase()}" 
            />
            <label for="${type.toLowerCase()}" class="label label--secondary">
                ${type}
            </label>
        </li>`
    ).join('');

    radioMenu.innerHTML += radioMenuItems;
}

displayRadioMenu();
displaySelectMenu();