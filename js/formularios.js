function calcularTempoLiquido() {

    const linhas =
        document.querySelectorAll("#tabela-ctc-body tr");

    linhas.forEach(linha => {

        // ignora a linha TOTAL
        if (!linha.querySelector(".tempo-bruto")) {
            return;
        }

        const tempoBruto =
            Number(
                linha.querySelector(".tempo-bruto").value
            ) || 0;

        const faltas =
            Number(
                linha.querySelector(".faltas").value
            ) || 0;

        const licencaNaoDedutivel =
            Number(
                linha.querySelector(".licenca-nao-dedutivel").value
            ) || 0;

        const licencaDedutivel =
            Number(
                linha.querySelector(".licenca-dedutivel").value
            ) || 0;

        const suspensao =
            Number(
                linha.querySelector(".suspensao").value
            ) || 0;

        const disponibilidade =
            Number(
                linha.querySelector(".disponibilidade").value
            ) || 0;

        const liquido =
            tempoBruto
            - faltas
            - licencaNaoDedutivel
            - licencaDedutivel
            - suspensao
            - disponibilidade;

        linha.querySelector(".tempo-liquido")
            .value = liquido;

    });

    somarTempoLiquido();
}

function somarTempoLiquido() {

    const campos =
        document.querySelectorAll(".tempo-liquido");

    let total = 0;

    campos.forEach(campo => {
        total += Number(campo.value) || 0;
    });

    document.getElementById("total-liquido")
        .textContent = total;

    document.getElementById("total-liquido2")
        .textContent = total;

    const tempo = converterTempo(total);

    document.getElementById("anos")
        .textContent =
        `${tempo.anos} anos, `;

    document.getElementById("meses")
        .textContent =
        `${tempo.meses} meses e `;

    document.getElementById("dias")
        .textContent =
        `${tempo.dias} dias`;

}

function converterTempo(totalDias) {

    const anos = Math.floor(totalDias / 365);

    let resto = totalDias % 365;

    const meses = Math.floor(resto / 30);

    resto = resto % 30;

    const dias = resto;

    return { anos, meses, dias };

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

sincronizarSpan("orgao", "orgao2");
sincronizarSpan("nomeServidor", "nomeServidor2");
sincronizarSpan("cargo", "cargo2");
sincronizarSpan("nomeMae", "nomeMae2");
sincronizarSpan("programa", "programa2")
sincronizarSpan("instituicao", "instituicao2")



sincronizarInput("cnpj", "cnpj2");
sincronizarInput("matricula", "matricula2");
sincronizarInput("cpf", "cpf2");
sincronizarInput("pis", "pis2");
sincronizarInput("dn", "dn2");
sincronizarInput("admissao", "admissao2");
sincronizarInput("exoneracao", "exoneracao2");



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