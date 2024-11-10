import { loadingCards } from "./cardTemplates.js";
import { displayCardFilter, displayCards } from "./generateCards.js";
import {
    displayDaySelectMenu,
    displayTypeRadioMenu,
    displayTimezoneMenu
} from "./generateMenus.js";

async function initialize() {
    loadingCards();
    displayCards();
    displayCardFilter();
    displayDaySelectMenu();
    displayTypeRadioMenu();
    displayTimezoneMenu();
}

initialize();