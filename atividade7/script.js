/* Variáveis */
// Elements screen
const rockElement = document.getElementById("rock");
const paperElement = document.getElementById("paper");
const scissorsElement = document.getElementById("scissors");

/* Enum */
const Choice = {
    Rock: 0,
    Paper: 1,
    Scissors: 2
}


/* Functions */
function addEvents() {
    rockElement.addEventListener('click', () => confirmUserChoice(Choice.Rock));
    paperElement.addEventListener('click', () => confirmUserChoice(Choice.Paper));
    scissorsElement.addEventListener('click', () => confirmUserChoice(Choice.Scissors));
}



function confirmUserChoice(userChoice) {

    var result = false;
    switch (userChoice) {
        case Choice.Rock:
            result = confirm("Você escolheu Pedra! Confirma a escolha?");
            break;
        case Choice.Paper:
            result = confirm("Você escolheu Papel! Confirma a escolha?")
            break;
        case Choice.Scissors:
            result = confirm("Você escolheu Tesoura! Confirma a escolha?")
            break;
    }

    if (result) {
        processComputerChoice(userChoice)
    }
}

function processComputerChoice(userChoice) {
    const randomNumber = getRandomInt(3);
    executeGame(userChoice, randomNumber);
}

function executeGame(userChoice, computerChoice) {

    switch (userChoice.toString() + computerChoice.toString()) {
        case "02":
        case "10":
        case "21":
            userWin(userChoice, computerChoice);
            break;

        case "20":
        case "01":
        case "12":
            computerWin(userChoice, computerChoice);
            break;

        case "00":
        case "11":
        case "22":
            draw(userChoice, computerChoice);
            break;
    }
}

function userWin(userChoice, computerChoice) {
    const finalString = "Sua escolha: " + stringChoice(userChoice) + "\nEcolha do computador: " + stringChoice(computerChoice) + "\n\nVocê venceu o jogo!";
    alert(finalString);
}

function computerWin(userChoice, computerChoice) {
    const finalString = "Sua escolha: " + stringChoice(userChoice) + "\nEcolha do computador: " + stringChoice(computerChoice) + "\n\nVocê perdeu o jogo!";
    alert(finalString);
}

function draw(userChoice, computerChoice) {
    const finalString = "Sua escolha: " + stringChoice(userChoice) + "\nEcolha do computador: " + stringChoice(computerChoice) + "\n\nO jogo empatou!";
    alert(finalString);
}

function stringChoice(choice) {
    var choices = {
        0: 'Pedra',
        1: 'Papel',
        2: 'Tesoura'
    }

    return choices[choice];
}

/* Aux */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

/* Init program */
addEvents();