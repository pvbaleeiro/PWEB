/* Variáveis */
// Elements screen
const generateResearchElement = document.getElementById("simulate-btn");
const realResearchElement = document.getElementById("real-btn");

// Others
var maxResearch = 45;
var minResearch = 2;
const minimumAge = 18;
const maximumAge = 90;

/* Enum */
const RateOption = {
    Bad: 1,
    Regular: 2,
    Good: 3,
    Excellent: 4
}

const Gender = {
    Male: 0,
    Female: 1
}

/* Main Functions */
function addEvents() {
    generateResearchElement.addEventListener('click', () => generateResearch());
    realResearchElement.addEventListener('click', () => realResearch());
}

function generateResearch() {

    var listOfAge = [];
    var listOfGender = [];
    var listOfRateOption = [];

    for (let i = 0; i < maxResearch; i++) {
        listOfAge.push(generateValidAge());
        listOfGender.push(generateValidGender());
        listOfRateOption.push(generateValidRateOptionResearch());
    }

    processResults(listOfAge, listOfGender, listOfRateOption, maxResearch);
}

function realResearch() {

    var listOfAge = [];
    var listOfGender = [];
    var listOfRateOption = [];

    var researchs;
    do {
        researchs = promptTotalResearch();
    } while (!totalResearchIsValid(researchs));

    for (let i = 0; i < researchs; i++) {

        var age;
        do {
            age = promptAge();
        } while (!ageIsValid(age));
        listOfAge.push(parseInt(age));

        var gender;
        do {
            gender = promptGender();
        } while (!genderIsValid(gender));
        listOfGender.push(parseInt(gender));

        var option;
        do {
            option = promptRateOption();
        } while (!rateIsValid(option));
        listOfRateOption.push(parseInt(option));
    }

    processResults(listOfAge, listOfGender, listOfRateOption, researchs);
}

function processResults(listOfAge, listOfGender, listOfRateOption, totalResearch) {

    const averageDate = calcAverageAge(listOfAge);
    const olderAge = calcOlderAge(listOfAge);
    const newerAge = calcNewerAge(listOfAge);
    const totalBadResponse = calcTotalBadResponse(listOfRateOption);
    const percentageGoodResponse = calcPercentageGoodResponse(listOfRateOption, totalResearch);
    const percentageExcellentResponse = calcPercentageExcellentResponse(listOfRateOption, totalResearch);
    const totalMaleResponse = calcTotalMaleResponse(listOfGender);
    const totalFemaleResponse = calcTotalFemaleResponse(listOfGender);
    presentResults(averageDate, olderAge, newerAge, totalBadResponse, percentageGoodResponse, percentageExcellentResponse, totalMaleResponse, totalFemaleResponse);
}

// Calcs
function calcAverageAge(listOfAge) {
    const average = list => list.reduce((prev, curr) => prev + curr) / list.length;
    return average(listOfAge);
}

function calcOlderAge(listOfAge) {
    const max = Math.max(...listOfAge);
    return max;
}

function calcNewerAge(listOfAge) {
    const min = Math.min(...listOfAge);
    return min;
}

function calcTotalBadResponse(listOfRateOption) {
    const total = listOfRateOption.reduce(function (acc, option) {
        if (option == RateOption.Bad) acc += 1;
        return acc;
    }, 0);
    return total;
}

function calcPercentageGoodResponse(listOfRateOption, totalResearch) {
    const total = listOfRateOption.reduce(function (acc, option) {
        if (option == RateOption.Good) acc += 1;
        return acc;
    }, 0);
    return ((total * 100) / totalResearch);
}

function calcPercentageExcellentResponse(listOfRateOption, totalResearch) {
    const total = listOfRateOption.reduce(function (acc, option) {
        if (option == RateOption.Excellent) acc += 1;
        return acc;
    }, 0);
    return ((total * 100) / totalResearch);
}

function calcTotalMaleResponse(listOfGender) {
    const total = listOfGender.reduce(function (acc, gender) {
        if (gender == Gender.Male) acc += 1;
        return acc;
    }, 0);
    return total;
}

function calcTotalFemaleResponse(listOfGender) {
    const total = listOfGender.reduce(function (acc, gender) {
        if (gender == Gender.Female) acc += 1;
        return acc;
    }, 0);
    return total;
}

/* Visual alert, print */
function promptTotalResearch() {
    return prompt("Quantas pesquisas serão realizadas? [Entre 2 e 45]");
}

function promptAge() {
    return prompt("Qual a sua idade? [Entre 18 e 90]");
}

function promptGender() {
    return prompt("Qual o seu sexo? \n\n0- Masculino\n1- Feminino");
}

function promptRateOption() {
    return prompt("Qual a sua avaliação? \n\n1- Péssimo\n2- Regular\n3- Bom\n4- Ótimo");
} 

function presentResults(averageDate, olderAge, newerAge, totalBadResponse, percentageGoodResponse, percentageExcellentResponse, totalMaleResponse, totalFemaleResponse) {
    const presentString = "Resultado da pesquisa\n\n" + "Média da idade das pessoas: " + averageDate.toFixed(0) + " anos"
        + "\nIdade da pessoa mais velha: " + olderAge + " anos"
        + "\nIdade da pessoa mais nova: " + newerAge + " anos"
        + "\nTotal que responderam Péssimo: " + totalBadResponse
        + "\nPorcentagem que responderam Ótimo: " + percentageExcellentResponse.toFixed(0) + "%"
        + "\nPorcentagem que responderam Bom: " + percentageGoodResponse.toFixed(0) + "%"
        + "\nTotal de homens que responderam: " + totalMaleResponse
        + "\nTotal de mulheres que responderam: " + totalFemaleResponse;
    alert(presentString)
}

/* Validate */
function totalResearchIsValid(researchs) {
    return researchs >= minResearch && researchs <= maxResearch;
}

function ageIsValid(age) {
    return age >= minimumAge && age <= maximumAge;
}

function genderIsValid(gender) {
    return gender == Gender.Male || gender == Gender.Female;
}

function rateIsValid(rate) {
    return rate == RateOption.Bad || rate == RateOption.Regular || rate == RateOption.Good || rate == RateOption.Excellent;
}

/* Generate random */
function generateValidAge() {
    return getRandomInt(minimumAge, maximumAge);
}

function generateValidGender() {
    return getRandomInt(Gender.Male, Gender.Female);
}

function generateValidRateOptionResearch() {
    return getRandomInt(RateOption.Bad, RateOption.Excellent);
}

/* Aux */
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* Init program */
addEvents();