import { showLoadingCards } from "./cardTemplates.js";
import { displayCardFilter, displayCards } from "./generateCards.js";
import {
    displayDaySelectMenu,
    displayTypeRadioMenu,
    displayTimezoneMenu
} from "./generateMenus.js";

async function initialize() {
    showLoadingCards();
    displayCards();
    displayCardFilter();
    displayDaySelectMenu();
    displayTypeRadioMenu();
    displayTimezoneMenu();
}

initialize();