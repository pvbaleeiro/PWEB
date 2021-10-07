
/* Functions */
function Conta() {

    /* Properties */
    var nome;
    this.getNome = function() {
        return nome;
    };
    this.setNome = function(value) {
        nome = value;
    };

    var correntista;
    this.getCorrentista = function() {
        return correntista;
    };
    this.setCorrentista = function(value) {
        correntista = value;
    };

    var banco;
    this.getBanco = function() {
        return banco;
    };
    this.setBanco = function(value) {
        banco = value;
    };

    var numeroConta;
    this.getNumeroConta = function() {
        return numeroConta;
    };
    this.setNumeroConta = function(value) {
        numeroConta = value;
    };

    var saldo;
    this.getSaldo = function() {
        return saldo;
    };
    this.setSaldo = function(value) {
        saldo = value;
    };
}

function ContaCorrente() {

    /* Properties */
    var saldoEspecial;
    this.getSaldoEspecial = function() {
        return saldoEspecial;
    };
    this.setSaldoEspecial = function(value) {
        saldoEspecial = value;
    };
}

function ContaPoupanca() {

    /* Properties */
    var juros;
    this.getJuros = function() {
        return juros;
    };
    this.setJuros = function(value) {
        juros = value;
    };

    var dataVencimento;
    this.getDataVencimento = function() {
        return dataVencimento;
    };
    this.setDataVencimento = function(value) {
        dataVencimento = value;
    };
}
