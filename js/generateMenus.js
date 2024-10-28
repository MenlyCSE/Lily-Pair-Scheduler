// temporarily here until database...
let types = ['Tutor', 'Student'];
let days = [
    'Mondays', 'Tuesdays', 'Wednesdays',
    'Thursdays', 'Fridays', 'Saturdays',
    'Sundays'
];
let timezones = [
    "Eastern Standard Time (EST)", "Central Standard Time (CST)",
    "Mountain Standard Time (MST)", "Pacific Standard Time (PST)",
    "British Summer Time (BST)", "Central European Time (CET)",
    "Japan Standard Time (JST)", "Australian Eastern Standard Time (AEST)",
    "Brasilia Time (BRT)", "Moscow Standard Time (MSK)",
    "South Africa Standard Time (SAST)", "China Standard Time (CST)",
    "New Zealand Standard Time (NZST)", "India Standard Time (IST)",
    "Singapore Standard Time (SGT)",  "Hong Kong Time (HKT)"
];

function displaySelectMenu() {
    const checkboxMenu = document.getElementById('checkbox-menu');
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

function displayFilterMenu() {
    const timezone = document.getElementById('timezone-filter');
    const type = document.getElementById('type-filter');
    const available = document.getElementById('available-filter')

    const timezoneFilter = timezones.map(timezone => `
            <option value="${timezone}">${timezone}</option>
        `).join('');

    const typeFilter = types.map(type => `
            <option value="${type}">${type}</option>
        `).join('');

    const availableFilter = days.map(day => `
            <option value="${day}">${day}</option>
        `).join('');
    
    timezone.innerHTML += timezoneFilter;
    type.innerHTML += typeFilter;
    available.innerHTML += availableFilter;
}

displayRadioMenu();
displaySelectMenu();
displayFilterMenu();