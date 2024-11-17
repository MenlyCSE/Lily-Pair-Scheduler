import { submitBtnListener } from "./submitForm.js";
import { showLoadingCards } from "./cardTemplates.js";
import { displayCardFilter, displayCards } from "./generateCards.js";
import {
    displayDaySelectMenu,
    displayTypeRadioMenu,
    displayTimezoneMenu
} from "./generateMenus.js";

async function initialize() {
    submitBtnListener();
    showLoadingCards();
    displayCards();
    displayCardFilter();
    displayDaySelectMenu();
    displayTypeRadioMenu();
    displayTimezoneMenu();
}

initialize();