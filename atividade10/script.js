/* Variáveis */
/* Enum */
const ObjectType = {
    Constructor: 0,
    WithoutConstructor: 1,
    Literal: 2,
}

/* Main Functions */
function addEvents() {
    startProgram();
}

function startProgram() {
    const aluno = criaObjetoAluno();
    printAluno(aluno);
}

/* Required Functions */
function criaObjetoAluno() {

    const option = getRandomInt(0, 2);

    switch (option) {
        case 0:
            var aluno = new Object();
            aluno.ra = "RA15444455";
            aluno.nome = "Aluno usando construtor";
            aluno.tipo = ObjectType.Constructor
            return aluno;

        case 1:
            var aluno = {};
            aluno.ra = "RA154142215";
            aluno.nome = "Aluno sem construtor";
            aluno.tipo = ObjectType.WithoutConstructor
            return aluno;

        default:
            var aluno = {
                ra: "RA454444777",
                nome: "Aluno literal",
                tipo: ObjectType.Literal
            };
            return aluno;
    }
}

/* Visual alert, print */
function printAluno(aluno) {
    var finalString = "Dados aluno\nRA: " + aluno.ra + "\nNome: " + aluno.nome;
    switch (aluno.tipo) {
        case ObjectType.Constructor:
            finalString = finalString + "\n\n" + `var aluno = new Object();
            aluno.ra = "RA15444455";
            aluno.nome = "Aluno usando construtor";`;
            break;
        case ObjectType.WithoutConstructor:
            finalString = finalString + "\n\n" + `var aluno = {};
        aluno.ra = "RA154142215";
        aluno.nome = "Aluno sem construtor";`;
            break;

        case ObjectType.Literal:
            finalString = finalString + "\n\n" + ` var aluno = {
            ra: "RA454444777",
            nome: "Aluno literal"};`;
            break;
    }
    alert(finalString);
}

/* Aux */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* Init program */
addEvents();