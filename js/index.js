import { displayCardFilter, displayCards } from "./generateCards.js";
import {
    displayDaySelectMenu,
    displayTypeRadioMenu,
    displayTimezoneMenu
} from "./generateMenus.js";

async function initialize() {
    displayCards();
    displayCardFilter();
    displayDaySelectMenu();
    displayTypeRadioMenu();
    displayTimezoneMenu();
}

initialize();