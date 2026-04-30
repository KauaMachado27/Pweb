function calcularValorIMC(peso, altura) {
    return peso / (altura * altura);
}

function obterClassificacao(imc) {
    if (imc < 18.5) {
        return "Magreza (Grau 0)";
    } else if (imc < 25) {
        return "Normal (Grau 0)";
    } else if (imc < 30) {
        return "Sobrepeso (Grau I)";
    } else if (imc < 40) {
        return "Obesidade (Grau II)";
    } else {
        return "Obesidade Grave (Grau III)";
    }
}

function validarDados(peso, altura) {
    if (isNaN(peso) || isNaN(altura)) {
        return "Preencha todos os campos.";
    }
    if (peso <= 0 || altura <= 0) {
        return "Valores devem ser maiores que zero.";
    }
    return "";
}

function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let erro = validarDados(peso, altura);
    let resultado = document.getElementById("resultado");

    if (erro !== "") {
        resultado.innerHTML = erro;
        resultado.style.color = "red";
        return;
    }

    let imc = calcularValorIMC(peso, altura);
    let classificacao = obterClassificacao(imc);

    resultado.innerHTML =
        "IMC: " + imc.toFixed(2) + "<br>" +
        "Classificação: " + classificacao;

    resultado.style.color = "#333";
}