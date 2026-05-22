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

const iniciolic = document.getElementById("iniciolic");

const fimlic = document.getElementById("fimlic");


if (iniciolic && fimlic) {

    iniciolic.addEventListener("change", () => {

        const dataInicial = new Date(iniciolic.value);

        dataInicial.setDate(dataInicial.getDate() + 120);

        const dia = String(dataInicial.getDate()).padStart(2, "0");

        const mes = String(dataInicial.getMonth() + 1).padStart(2, "0");

        const ano = dataInicial.getFullYear();

        fimlic.value = `${dia}/${mes}/${ano}`;

    });

}

const inicioprorrog = document.getElementById("inicio-prorrog");

const fimprorrog = document.getElementById("fim-prorrog");


if (inicioprorrog && fimprorrog) {

    inicioprorrog.addEventListener("change", () => {

        const dataInicial = new Date(inicioprorrog.value);

        dataInicial.setDate(dataInicial.getDate() + 120);

        const dia = String(dataInicial.getDate()).padStart(2, "0");

        const mes = String(dataInicial.getMonth() + 1).padStart(2, "0");

        const ano = dataInicial.getFullYear();

        fimprorrog.value = `${dia}/${mes}/${ano}`;

    });

}



const botaoAdd = document.getElementById("add-quinquenio");

const botaoRemove = document.getElementById("remove-quinquenio");

const lista = document.getElementById("lista-quinquenios");


if (botaoAdd && botaoRemove && lista) {

    botaoAdd.addEventListener("click", () => {

        const novoItem = document.createElement("li");

        novoItem.innerHTML = `

            <input type="number" class="input-numero">º quinquênio:
            <input type="text"> a
            <input type="text">

        `;

        lista.appendChild(novoItem);

    });


    botaoRemove.addEventListener("click", () => {

        if (lista.children.length > 1) {

            lista.removeChild(lista.lastElementChild);

        }

    });

}

const botaoLinha = document.getElementById("add-linha");

const linhaRemove = document.getElementById("remove-linha");

const tabelaBody = document.getElementById("tabela-quinquenio-body");


if (botaoLinha && linhaRemove && tabelaBody) {

    botaoLinha.addEventListener("click", () => {

        const novaLinha = document.createElement("tr");

        novaLinha.innerHTML = `

            <td><input type="text" class="input-numero"></td>

            <td><input type="text" name="ocorrencia"></td>

            <td>
               <span contenteditable="true"
               class="campo-inline"></span>
            </td>

            <td><input type="text" class="input-numero"></td>

            <td>
               <span contenteditable="true"
               class="campo-inline"></span>
            </td>

        `;

        tabelaBody.appendChild(novaLinha);

    });

     linhaRemove.addEventListener("click", () => {

        if (tabelaBody.children.length > 1) {

            tabelaBody.removeChild(tabelaBody.lastElementChild);

        }

    });

}