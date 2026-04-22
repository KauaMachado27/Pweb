// 1) Maior
function maior(a, b, c) {
    if (a > b && a > c) return a;
    else if (b > c) return b;
    else return c;
}

function calcMaior() {
    let a = Number(document.getElementById("n1").value);
    let b = Number(document.getElementById("n2").value);
    let c = Number(document.getElementById("n3").value);

    document.getElementById("resultado").innerHTML =
        "Maior: " + maior(a, b, c);
}

// 2) Crescente
function crescente(a, b, c) {
    let nums = [a, b, c];
    nums.sort(function(x, y){ return x - y; });
    return nums;
}

function calcCrescente() {
    let a = Number(document.getElementById("c1").value);
    let b = Number(document.getElementById("c2").value);
    let c = Number(document.getElementById("c3").value);

    document.getElementById("resultado").innerHTML =
        "Ordem: " + crescente(a, b, c);
}

// 3) Palíndromo
function palindromo(str) {
    if (!str) return false;

    let t = str.toLowerCase().replace(/\s/g, "");
    let inv = t.split("").reverse().join("");

    return t == inv;
}

function calcPalindromo() {
    let texto = document.getElementById("texto").value;

    document.getElementById("resultado").innerHTML =
        palindromo(texto) ? "É palíndromo" : "Não é palíndromo";
}

// 4) Subconjunto
function subconjunto(p1, p2) {
    if (!p1 || !p2) return "erro";

    if (p1.includes(p2)) return "é um subconjunto";
    else return "não é um subconjunto";
}

function calcSub() {
    let p1 = document.getElementById("p1").value;
    let p2 = document.getElementById("p2").value;

    document.getElementById("resultado").innerHTML =
        subconjunto(p1, p2);
}

// 5) Dia da semana
function diaSemana(data) {
    let d = new Date(data);
    let dias = ["Domingo","Segunda","Terça","Quarta","Quinta","Sexta","Sábado"];
    return dias[d.getDay()];
}

function calcData() {
    let data = document.getElementById("data").value;

    document.getElementById("resultado").innerHTML =
        "Dia: " + diaSemana(data);
}