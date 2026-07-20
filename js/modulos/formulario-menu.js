// ==========================
// BOTÕES
// ==========================

const btnAposentadoria =
document.querySelector("#btn-aposentadoria");

const btnLicencas =
document.querySelector("#btn-licencas");

const btnAfastamentos =
document.querySelector("#btn-afastamentos");


const aposentadoria = [

    {

        titulo:
        "Certidão de Tempo de Contribuição",

        pagina:
        "../formularios/ctc.html"
    }
];

const licencas = [
    {

        titulo:
        "Para Licença Capacitação",

        pagina:
        "../formularios/formlc.html"

    },

    {

        titulo:
        "Para Licença Gestante",

        pagina:
        "../formularios/formlicgest.html"

    },

    {

        titulo:
        "Para Licença para Tratar de Interesses Particulares",

        pagina:
        "../formularios/formlip.html"
    }
];

const afastamentos = [
    {

        titulo:
        "Para Afastamento Integral",

        pagina:
        "../formularios/formafastint.html"
    },

    {

        titulo:
        "Para Prorrogação de Afastamento Integral",

        pagina:
        "../formularios/formafastint.prorrog.html"

    }
];

// ==========================
// EVENTOS DOS BOTÕES
// ==========================

btnAposentadoria.addEventListener("click", function () {

    document.querySelectorAll("aside button").forEach(botao => {
        botao.classList.remove("active");
    });

    btnAposentadoria.classList.add("active");

    atualizarBreadcrumb(
        "../index.html",
        "Aposentadoria",
        "Formulários",
        "formularios.html"
    );

    mostrarCards(
        aposentadoria,
        "card-formularios"
    );

});

btnLicencas.addEventListener("click", function () {

    document.querySelectorAll("aside button").forEach(botao => {
        botao.classList.remove("active");
    });

    btnLicencas.classList.add("active");

    atualizarBreadcrumb(
         "../index.html",
        "Licenças",
        "Formulários",
        "formularios.html"
    );

    mostrarCards(
        licencas,
        "card-formularios"
    );

});

btnAfastamentos.addEventListener("click", function () {

    document.querySelectorAll("aside button").forEach(botao => {
        botao.classList.remove("active");
    });

    btnAfastamentos.classList.add("active");

    atualizarBreadcrumb(
          "../index.html",
        "Afastamentos",
        "Formulários",
        "formularios.html"
    );

    mostrarCards(
        afastamentos,
        "card-formularios"
    );

});