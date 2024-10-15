function displayTimezones() {
    const selectMenu = document.getElementById(`select-menu`);
    const timezoneAPI = `https://timeapi.io/api/timezone/availabletimezones`;

    try {
        fetch(timezoneAPI)
        .then(response => response.json())
        .then(data => {
            const result = data.map(timezone => 
                `<option value="${timezone}">${timezone}</option>`
            ).join('');

            selectMenu.innerHTML += result;
        })

    } catch (error)  {
        return;
    }
}

displayTimezones();


