let espectadores = [];

function adicionarEspectador() {
  const idade   = parseInt(document.getElementById("idade").value);
  const sexo    = document.getElementById("sexo").value;
  const opiniao = parseInt(document.getElementById("opiniao").value);

  if (!idade || !sexo || !opiniao) {
    alert("Preencha todos os campos.");
    return;
  }
  if (espectadores.length >= 45) {
    alert("Limite de 45 espectadores atingido.");
    return;
  }

  espectadores.push({ idade, sexo, opiniao });
  document.getElementById("contagem").textContent = espectadores.length;

  document.getElementById("idade").value   = "";
  document.getElementById("sexo").value    = "";
  document.getElementById("opiniao").value = "";
  document.getElementById("idade").focus();
}

function calcularResultados() {
  if (espectadores.length === 0) {
    alert("Adicione ao menos um espectador.");
    return;
  }

  const total = espectadores.length;
  let somaIdades = 0, pessimo = 0, otimoBom = 0;
  let feminino = 0, masculino = 0, outros = 0;
  let maisVelha = 0, maisNova = 999;

  for (let e of espectadores) {
    somaIdades += e.idade;
    if (e.idade > maisVelha) maisVelha = e.idade;
    if (e.idade < maisNova)  maisNova  = e.idade;
    if (e.opiniao === 1)              pessimo++;
    if (e.opiniao === 3 || e.opiniao === 4) otimoBom++;
    if (e.sexo === "feminino")  feminino++;
    if (e.sexo === "masculino") masculino++;
    if (e.sexo === "outros")    outros++;
  }

  document.getElementById("res-media").textContent     = (somaIdades / total).toFixed(2) + " anos";
  document.getElementById("res-maisVelha").textContent = maisVelha + " anos";
  document.getElementById("res-maisNova").textContent  = maisNova + " anos";
  document.getElementById("res-pessimo").textContent   = pessimo + " pessoa(s)";
  document.getElementById("res-otimoBom").textContent  = ((otimoBom / total) * 100).toFixed(1) + "%";
  document.getElementById("res-feminino").textContent  = feminino + " pessoa(s)";
  document.getElementById("res-masculino").textContent = masculino + " pessoa(s)";
  document.getElementById("res-outros").textContent    = outros + " pessoa(s)";

  document.getElementById("resultados").style.display = "block";
  document.getElementById("resultados").scrollIntoView({ behavior: "smooth" });
}

function limparDados() {
  if (!confirm("Deseja apagar todos os dados?")) return;
  espectadores = [];
  document.getElementById("contagem").textContent     = "0";
  document.getElementById("resultados").style.display = "none";
  document.getElementById("idade").value   = "";
  document.getElementById("sexo").value    = "";
  document.getElementById("opiniao").value = "";
}