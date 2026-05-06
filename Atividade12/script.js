// ===== Exercício 1 - Função Construtora =====

function Retangulo(base, altura) {
  this.base = base;
  this.altura = altura;

  this.calcularArea = function () {
    return this.base * this.altura;
  };
}

function calcularArea() {
  var base = parseFloat(document.getElementById("base").value);
  var altura = parseFloat(document.getElementById("altura").value);

  if (isNaN(base) || isNaN(altura)) {
    document.getElementById("resultadoRetangulo").textContent = "Por favor, informe base e altura.";
    return;
  }

  var retangulo = new Retangulo(base, altura);
  var area = retangulo.calcularArea();

  document.getElementById("resultadoRetangulo").textContent =
    "Base: " + base + " | Altura: " + altura + "\nÁrea do Retângulo: " + area;
}


// ===== Exercício 2 - Classes com Herança =====

class Conta {
  constructor() {
    this._nome = "";
    this._banco = "";
    this._numeroConta = "";
    this._saldo = 0;
  }

  get nome() { return this._nome; }
  set nome(v) { this._nome = v; }

  get banco() { return this._banco; }
  set banco(v) { this._banco = v; }

  get numeroConta() { return this._numeroConta; }
  set numeroConta(v) { this._numeroConta = v; }

  get saldo() { return this._saldo; }
  set saldo(v) { this._saldo = v; }

  exibirDados() {
    return "Nome: " + this._nome +
           "\nBanco: " + this._banco +
           "\nNúmero da Conta: " + this._numeroConta +
           "\nSaldo: R$ " + parseFloat(this._saldo).toFixed(2);
  }
}

class Corrente extends Conta {
  constructor() {
    super();
    this._saldoEspecial = 0;
  }

  get saldoEspecial() { return this._saldoEspecial; }
  set saldoEspecial(v) { this._saldoEspecial = v; }

  exibirDados() {
    return super.exibirDados() +
           "\nSaldo Especial: R$ " + parseFloat(this._saldoEspecial).toFixed(2);
  }
}

class Poupanca extends Conta {
  constructor() {
    super();
    this._juros = 0;
    this._dataVencimento = "";
  }

  get juros() { return this._juros; }
  set juros(v) { this._juros = v; }

  get dataVencimento() { return this._dataVencimento; }
  set dataVencimento(v) { this._dataVencimento = v; }

  exibirDados() {
    return super.exibirDados() +
           "\nJuros: " + this._juros + "%" +
           "\nData de Vencimento: " + this._dataVencimento;
  }
}

function criarCorrente() {
  var c = new Corrente();
  c.nome = document.getElementById("nomeCorrente").value;
  c.banco = document.getElementById("bancoCorrente").value;
  c.numeroConta = document.getElementById("numCorrente").value;
  c.saldo = document.getElementById("saldoCorrente").value;
  c.saldoEspecial = document.getElementById("saldoEspecial").value;

  document.getElementById("resultadoCorrente").textContent =
    "=== Conta Corrente ===\n" + c.exibirDados();
}

function criarPoupanca() {
  var p = new Poupanca();
  p.nome = document.getElementById("nomePoupanca").value;
  p.banco = document.getElementById("bancoPoupanca").value;
  p.numeroConta = document.getElementById("numPoupanca").value;
  p.saldo = document.getElementById("saldoPoupanca").value;
  p.juros = document.getElementById("juros").value;
  p.dataVencimento = document.getElementById("dataVencimento").value;

  document.getElementById("resultadoPoupanca").textContent =
    "=== Conta Poupança ===\n" + p.exibirDados();
}