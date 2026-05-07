var imgFechada  = "fechada.jpeg";
var imgAberta   = "aberta.jpeg";
var imgQuebrada = "quebrada.jpeg";

var janela = document.getElementById("janela");
var titulo = document.getElementById("titulo");

janela.src = imgFechada;
titulo.textContent = "Janela Fechada";

function abrirJanela() {
  janela.src = imgAberta;
  titulo.textContent = "Janela Aberta";
}

function fecharJanela() {
  janela.src = imgFechada;
  titulo.textContent = "Janela Fechada";
}

function quebrarJanela() {
  janela.src = imgQuebrada;
  titulo.textContent = "Janela Quebrada";
}