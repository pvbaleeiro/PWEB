/* Variáveis */
// Media
var nomeAluno = "";
var notaUm = 0.0;
var notaDois = 0.0;
var notaTres = 0.0;
const totalNotas = 3;
const decimalDigits = 2;
// Operacoes
var numeroUm = 0;
var numeroDois = 0;

/* Funções */
// Media
function promptPedirNome() {
    nomeAluno = prompt("Digite o seu nome:");
}

function promptPedirNotas() {
    notaUm = parseFloat(prompt("Digite a primeira nota:"));
    notaDois = parseFloat(prompt("Digite a segunda nota:"));
    notaTres = parseFloat(prompt("Digite a terceira nota:"));
}

function calculaExibeMedia() {
    const media = ((notaUm + notaDois + notaTres) / totalNotas).toFixed(2);
    const stringFinal = nomeAluno + ", sua média é: " + media;
    alert(stringFinal)
}

// Operacoes
function promptPedirNumeros() {
    numeroUm = parseInt(prompt("Digite o primeiro número:"));
    numeroDois = parseInt(prompt("Digite o segundo número:"));
}

function calculaExibeResultados() {
    const soma = numeroUm + numeroDois;
    const subtracao = numeroUm - numeroDois;
    const produto = numeroUm * numeroDois;
    const divisao = numeroUm / numeroDois;
    const resto = numeroUm % numeroDois;
    const stringFinal = "Soma: " + soma + "\nSubtração: " + subtracao + 
    "\nProduto: " + produto + "\nDivisão: " + divisao + "\nResto: " + resto;
    alert(stringFinal);
}
