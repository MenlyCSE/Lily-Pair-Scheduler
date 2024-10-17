function displayTimezones() {
    const selectMenu = document.getElementById(`select-menu`);
    const popularTimezones = [
        "Eastern Standard Time (EST)", "Central Standard Time (CST)",
        "Mountain Standard Time (MST)", "Pacific Standard Time (PST)",
        "British Summer Time (BST)", "Central European Time (CET)",
        "Japan Standard Time (JST)", "Australian Eastern Standard Time (AEST)",
        "Brasilia Time (BRT)", "Moscow Standard Time (MSK)",
        "South Africa Standard Time (SAST)", "China Standard Time (CST)",
        "New Zealand Standard Time (NZST)", "India Standard Time (IST)",
        "Singapore Standard Time (SGT)",  "Hong Kong Time (HKT)"
    ];
    

    const result = popularTimezones
        .map(zone =>`<option value="${zone}">${zone}</option>`)
        .join('');

    selectMenu.innerHTML += result;
}

displayTimezones();
