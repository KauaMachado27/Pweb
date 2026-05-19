const inputTexto = document.getElementById('inputTexto');
const resultado = document.getElementById('resultado');
const radios = document.querySelectorAll('input[type="radio"]');

function transformar() {
  const texto = inputTexto.value;
  const selecionado = document.querySelector('input[name="transformacao"]:checked');

  if (!selecionado) {
    resultado.textContent = '';
    return;
  }

  if (selecionado.value === 'maiusculo') {
    resultado.textContent = texto.toUpperCase();
  } else {
    resultado.textContent = texto.toLowerCase();
  }
}

inputTexto.addEventListener('input', transformar);

radios.forEach(radio => {
  radio.addEventListener('change', transformar);
});