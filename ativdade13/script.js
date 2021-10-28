/* Variáveis */
// Others
const anyTextId = "anyText";
const uppercaseCheckId = "uppercase";
const lowercaseCheckId = "lowercase";

// Elements screen
const inputElement = document.getElementById(anyTextId);
const lowercaseCheck = document.getElementById(lowercaseCheckId);
const uppercaseCheck = document.getElementById(uppercaseCheckId);

/* Main Functions */
function addEvents() {

}

function handleClick(element) {
    handleCheck((element.name == lowercaseCheckId), (element.name == uppercaseCheckId));
}

function handleTyping() {
    handleCheck(lowercaseCheck.checked, uppercaseCheck.checked);
}

function handleCheck(statusLowercase, statusUppercase) {
    lowercaseCheck.checked = statusLowercase;
    uppercaseCheck.checked = statusUppercase;

    if (statusUppercase) {
        convertToUppercase(inputElement);
    } else {
        convertToLowercase(inputElement);
    }
}

function convertToUppercase(el) {
    if (!el || !el.value) return;
    el.value = el.value.toUpperCase();
}

function convertToLowercase(el) {
    if (!el || !el.value) return;
    el.value = el.value.toLowerCase();
}

/* Init program */
addEvents();