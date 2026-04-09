var nome = prompt("Digite o nome do aluno:");

var n1 = parseFloat(prompt("Digite a nota 1:"));
var n2 = parseFloat(prompt("Digite a nota 2:"));
var n3 = parseFloat(prompt("Digite a nota 3:"));
var n4 = parseFloat(prompt("Digite a nota 4:"));
var media = (n1 + n2 + n3 + n4) / 4;
alert("Aluno: " + nome + "\nMédia Aritmética: " + media.toFixed(2));

alert("Agora digite dois números para realizar as operações!!!");
var num1 = parseFloat(prompt("Digite o primeiro número:"));
var num2 = parseFloat(prompt("Digite o segundo número:"));
var soma      = num1 + num2;
var subtracao = num1 - num2;
var produto   = num1 * num2;
var divisao   = num1 / num2;
var resto     = num1 % num2;

alert(
    "=== Operações ===" +
    "\nSoma: "      + soma +
    "\nSubtração: " + subtracao +
    "\nProduto: "   + produto +
    "\nDivisão: "   + divisao.toFixed(2) +
    "\nResto: "     + resto
);