/* Variáveis */
// Others

/* Main Functions */
function performRectangle() {

    var height, width = 0;
    do {
        height = promptRectangleHeightInfo();
    } while (!numberIsValid(height));

    do {
        width = promptRectangleWidthInfo();
    } while (!numberIsValid(width));

    let rect = new Rectangle(height, width);
    printRectangleArea(rect);
}

function performConta() {

    ContaCorrente.prototype = new Conta();
    const contaCorrente = new ContaCorrente();
    contaCorrente.setNome("Paulo Ferreira");
    contaCorrente.setCorrentista("Sim");
    contaCorrente.setBanco("Banco Fatec");
    contaCorrente.setNumeroConta("4455-5");
    contaCorrente.setSaldo("R$4500,00");
    contaCorrente.setSaldoEspecial("R$7500,00");

    ContaPoupanca.prototype = new Conta();
    const contaPoupanca = new ContaPoupanca();
    contaPoupanca.setNome("Victor Baleeiro");
    contaPoupanca.setCorrentista("Sim");
    contaPoupanca.setBanco("Banco Sorocaba");
    contaPoupanca.setNumeroConta("8444-7");
    contaPoupanca.setSaldo("R$2100,00");
    contaPoupanca.setDataVencimento("20/10/2021");
    contaPoupanca.setJuros("8% a.a")

    printContas(contaCorrente, contaPoupanca);
}

/* Visual alert, print */
function promptRectangleHeightInfo() {
    return prompt("Informe a altura do retângulo:");
}

function promptRectangleWidthInfo() {
    return prompt("Informe a largura do retângulo:");
}

function printRectangleArea(rectangle) {
    const finalString = "Area do retângulo: " + rectangle.calcArea();
    alert(finalString);
}

function printContas(contaCorrente, contaPoupanca) {
    const finalString = "Dados conta corrente: " +
        `\n\nNome: ${contaCorrente.getNome()}` +
        `\nCorrentista: ${contaCorrente.getCorrentista()}` +
        `\nBanco: ${contaCorrente.getBanco()}` +
        `\nNumero Conta: ${contaCorrente.getNumeroConta()}` +
        `\nSaldo: ${contaCorrente.getSaldo()}` +
        `\nSaldo Especial: ${contaCorrente.getSaldoEspecial()}` +

    "\n\nDados poupança: " +
        `\n\nNome: ${contaPoupanca.getNome()}` +
        `\nCorrentista: ${contaPoupanca.getCorrentista()}` +
        `\nBanco: ${contaPoupanca.getBanco()}` +
        `\nNumero Conta: ${contaPoupanca.getNumeroConta()}` +
        `\nSaldo: ${contaPoupanca.getSaldo()}` +
        `\nData Vencimento: ${contaPoupanca.getDataVencimento()}` +
        `\nJuros: ${contaPoupanca.getJuros()}`;
    alert(finalString);
}

/* Validate */
function numberIsValid(number) {
    return !isNaN(parseFloat(number)) && !isNaN(number - 0);
}