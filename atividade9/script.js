/* Variáveis */
// Others
var maxNumbers = 3;

/* Main Functions */
function addEvents() {
    startProgram();
}

function startProgram() {

    var listOfNumbers = [];
    var number;

    for (let i = 0; i < maxNumbers; i++) {
        do {
            number = promptAskNumber(i);
        } while (!numberIsValid(number));
        listOfNumbers.push(parseInt(number));
    }

    printHighestNumber(listOfNumbers, highestNumber(listOfNumbers));
    printAscendingOrder(listOfNumbers, buildAscendingOrder([...listOfNumbers]));
}

/* Required Functions */
function highestNumber(list) {
    return Math.max(...list);
}

function buildAscendingOrder(list) {
    return list.sort();
}

/* Visual alert, print */
function promptAskNumber(index) {
    return prompt("Informe o número de posição [" + (index + 1) + "]");
}

function printHighestNumber(list, highestNumber) {
    const finalString = "Números informados: " + list + "\nO maior número dos informados é: " + highestNumber;
    alert(finalString);
}

function printAscendingOrder(originalList, list) {
    const finalString = "Números informados: " + originalList + "\nNúmeros informados em ordem crescente: " + list;
    alert(finalString);
}

/* Validate */
function numberIsValid(number) {
    return !isNaN(parseFloat(number)) && !isNaN(number - 0);
}

/* Init program */
addEvents();