const checkboxMenu = document.getElementById('checkbox-menu');
const radioMenu = document.getElementById('radio-menu');
const selectMenu = document.getElementById(`select-menu`);

let types = [
    'Tutor', 'Student'
];

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
    "Singapore Standard Time (SGT)", "Hong Kong Time (HKT)"
];

function displayDaySelectMenu() {
    const checkBoxItems = days.map(day => `
        <li>
            <input type="checkbox" class="checkbox--primary" id="${day}" />
            <label for="${day}" class="label label--secondary">${day}</label>
        </li>`
    ).join('');

    checkboxMenu.innerHTML += checkBoxItems;
}

function displayTypeRadioMenu() {
    const radioMenuItems = types.map(type => `
        <li>
            <input 
                type="radio" 
                name="type" 
                class="radiobox--primary" 
                id="${type.toLowerCase()}"
                required 
            />
            <label for="${type.toLowerCase()}" class="label label--secondary">
                ${type}
            </label>
        </li>`
    ).join('');

    radioMenu.innerHTML += radioMenuItems;
}

function displayTimezoneMenu() {
    const result = timezones
        .map(zone => `<option value="${zone}">${zone}</option>`)
        .join('');

    selectMenu.innerHTML += result;
}


export { displayDaySelectMenu, displayTypeRadioMenu, displayTimezoneMenu };