   const hoje = new Date();

     const dia = String(hoje.getDate()).padStart(2, '0');
     const mes = String(hoje.getMonth() + 1).padStart(2, '0');
     const ano = hoje.getFullYear();

document.getElementById("data-emissao").value =
`${dia}/${mes}/${ano}`;

function calcularCargaHoraria() {

  const dias =
    Number(document.getElementById("dias").value);

  const cargatotal =
    Number(document.getElementById("cargatotal").value);

  if (dias > 0 && cargatotal > 0) {

    const resultado =
      (cargatotal * 7 / dias).toFixed(2);

    document.getElementById("cargasem").value =
      resultado;
   }
}

function gerarPDF() {
  window.print();
}

function gerarPDF() {

  window.print();

  document
    .getElementById("formulario")
    .reset();

  document
    .querySelectorAll('[contenteditable="true"]')
    .forEach(campo => {

      campo.innerHTML = '';

  });

}