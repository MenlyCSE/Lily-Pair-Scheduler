function displayOptions() {
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

displayOptions();