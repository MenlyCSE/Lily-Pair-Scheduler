function displayTimezones() {
    const selectMenu = document.getElementById(`select-menu`);
    const popularTimezones = [
        "America/New_York", "America/Chicago", "America/Denver",
        "America/Los_Angeles", "America/Seattle", "America/Toronto",
        "America/Vancouver", "Europe/London", "Europe/Berlin",
        "Europe/Paris", "Asia/Tokyo", "Asia/Hong_Kong",
        "Asia/Singapore", "Australia/Sydney", "Australia/Melbourne",
        "Pacific/Auckland", "America/Sao_Paulo", "Europe/Moscow",
        "Africa/Johannesburg", "Asia/Shanghai", "Asia/Calcutta",
    ];

    const result = popularTimezones
        .map(zone =>`<option value="${zone}">${zone}</option>`)
        .join('');

    selectMenu.innerHTML += result;
}

displayTimezones();
