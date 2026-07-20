 const hoje = new Date();

     const dia = String(hoje.getDate()).padStart(2, '0');
     const mes = String(hoje.getMonth() + 1).padStart(2, '0');
     const ano = hoje.getFullYear();

const dataEmissao =
document.getElementById("data-emissao");

if (dataEmissao) {

    dataEmissao.value =
    `${dia}/${mes}/${ano}`;

}

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

  document
    .getElementById("requerimento")
    .reset();

  document
    .querySelectorAll('[contenteditable="true"]')
    .forEach(campo => {

      campo.innerHTML = '';

  });

}

const iniciolic = document.getElementById("inicio-lic");

const fimlic = document.getElementById("fim-lic");


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

        dataInicial.setDate(dataInicial.getDate() + 60);

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

            <td><input type="text" class="input-numero">º <input type="text" class="campo-data"> a <input type="text" 
                                class="campo-data"></td>

            <td><span contenteditable="true" class="campo-inline"></span></td>

            <td>
               <span contenteditable="true"
               class="campo-inline"></span>
            </td>

            <td><span contenteditable="true" class="campo-inline"></span></td>

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

function sincronizarSpan(origemId, destinoId) {
    const origem = document.getElementById(origemId);
    const destino = document.getElementById(destinoId);

    if (!origem || !destino) return;

    origem.addEventListener("input", () => {
        destino.textContent = origem.textContent;
    });
}


function sincronizarInput(origemId, destinoId) {

    const origem = document.getElementById(origemId);
    const destino = document.getElementById(destinoId);

    if (!origem || !destino) return;

    origem.addEventListener("input", () => {

        if ("value" in destino) {
            destino.value = origem.value;
        } else {
            destino.textContent = origem.value;
        }

    });

}

sincronizarSpan("cargo", "cargo2");
sincronizarSpan("programa", "programa2")
sincronizarSpan("instituicao", "instituicao2")
sincronizarInput("portaria", "portaria2")
sincronizarInput("data-portaria", "data-portaria2")
sincronizarInput("siape","siape2")


function sincronizarMultiplos(origemId, destinos) {

    const origem = document.getElementById(origemId);

    if (!origem) return;

    origem.addEventListener("input", () => {

        destinos.forEach(id => {

            const destino = document.getElementById(id);

            if (!destino) return;

            destino.textContent = origem.value;

        });

    });

}

sincronizarMultiplos(
    "requerente",
    ["requerente2", "requerente3"]
);

sincronizarMultiplos(
    "cargatotal",
    ["cargatotal2", "cargatotal3"]
);

sincronizarMultiplos(
    "dias",
    ["dias2", "dias3", "dias4"]
);

const body = document.body;

atualizarBreadcrumb(
    body.dataset.inicio,
    body.dataset.menu,
    body.dataset.parecer,
    body.dataset.linkMenu
);
 