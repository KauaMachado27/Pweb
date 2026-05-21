function validarForm() {

    let nome = document.meuForm.elements["nome"].value;
    let comentario = document.meuForm.elements["comentario"].value;
    let pesquisa = document.meuForm.elements["pesquisa"];

    // Validar nome
    if (nome.length < 10) {
        alert("O nome deve ter no mínimo 10 caracteres.");
        return false;
    }

    // Validar comentário
    if (comentario.length < 20) {
        alert("O comentário deve ter no mínimo 20 caracteres.");
        return false;
    }

    // Validar pesquisa
    let resposta = "";

    for (let i = 0; i < pesquisa.length; i++) {

        if (pesquisa[i].checked) {
            resposta = pesquisa[i].value;
        }
    }

    if (resposta === "") {
        alert("Selecione uma opção na pesquisa.");
        return false;
    }

    if (resposta === "sim") {
        alert("Volte sempre à esta página!");
    } else {
        alert("Que bom que você voltou a visitar esta página!");
    }

    return true;
}