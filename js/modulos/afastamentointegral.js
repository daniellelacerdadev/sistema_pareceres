// ==========================
// BOTÕES
// ==========================

const btnConcessoes =
document.querySelector("#btn-concessoes");

const btnProrrogacoes =
document.querySelector("#btn-prorrogacoes");

const btnAlteracoes =
document.querySelector("#btn-alteracao");

const btnInterrupcoes =
document.querySelector("#btn-interrupcao");

const btnEncerramento =
document.querySelector("#btn-encerramento");

const btnIndeferimentos =
document.querySelector("#btn-indeferimento");


const concessoes = [

    {

        titulo:
        "Para Técnicos Administrativos da Educação",

        pagina:
        "../pareceres/afastamento-integral/afastint-tae.html"

    },

    {

        titulo:
        "Para Professores do Ensino Básico, Técnico e Tecnológico",

        pagina:
        "../pareceres/afastamento-integral/afastint-docentes.html"

    }
  
];

const prorrogacoes = [
    {

        titulo:
        "Para primeira prorrogação",

        pagina:
        "../pareceres/afastamento-integral/afastint-prorrogacao.html"

    },

    {

        titulo:
        "Para nova prorrogação",

        pagina:
        "../pareceres/afastamento-integral/afastint-novaprorrog.html"

    }
];

const alteracao = [
    {

        titulo:
        "Para alteração de curso",

        pagina:
        "../pareceres/afastamento-integral/afastint-alteracaocurso.html"

    }
];

const interrupcao = [
    {
        titulo:
        "Para interrupção de afastamento integral",

        pagina:
        "../pareceres/afastamento-integral/afastint-interrupcao.html"
    }
];

const encerramento = [
    {
        titulo:
        "Para encerramento antecipado do afastamento integral",

        pagina:
        "../pareceres/afastamento-integral/afastint-encerramento.html"
    }
];

const indeferimento = [
    {
        titulo:
        "Para indeferimento por descumprimento de prazo",

        pagina:
        "../pareceres/afastamento-integral/afastint-prazo.html"
    },

    {
        titulo:
        "Para indeferimento por descumprimento de pedágio",

        pagina:
        "../pareceres/afastamento-integral/afastint-indefpedagio.html"
    }
];

// ==========================
// EVENTOS DOS BOTÕES
// ==========================

btnConcessoes.addEventListener("click", function () {

    document.querySelectorAll("aside button").forEach(botao => {
        botao.classList.remove("active");
    });

    btnConcessoes.classList.add("active");

    atualizarBreadcrumb(
         "../index.html",
        "Concessões",
        "Afastamento Integral",
        "afastintegral.html"
    );

    mostrarCards(
        concessoes,
        "card-concessao"
    );

});

btnProrrogacoes.addEventListener("click", function () {

    document.querySelectorAll("aside button").forEach(botao => {
        botao.classList.remove("active");
    });

    btnProrrogacoes.classList.add("active");

    atualizarBreadcrumb(
        "../index.html",
        "Prorrogações",
        "Afastamento Integral",
        "afastintegral.html"
    );

    mostrarCards(
        prorrogacoes,
        "card-prorrogacoes"
    );

});

btnAlteracoes.addEventListener("click", function () {

    document.querySelectorAll("aside button").forEach(botao => {
        botao.classList.remove("active");
    });

    btnAlteracoes.classList.add("active");

    atualizarBreadcrumb(
        "../index.html",
        "Alteração de Curso",
        "Afastamento Integral",
        "afastintegral.html"
    );

    mostrarCards(
        alteracao,
        "card-alteracao"
    );

});

btnInterrupcoes.addEventListener("click", function () {

    document.querySelectorAll("aside button").forEach(botao => {
        botao.classList.remove("active");
    });

    btnInterrupcoes.classList.add("active");

    atualizarBreadcrumb(
         "../index.html",
        "Interrupção",
        "Afastamento Integral",
        "afastintegral.html"
    );


    mostrarCards(
        interrupcao,
        "card-interrupcao"
    );

});

btnEncerramento.addEventListener("click", function () {

    document.querySelectorAll("aside button").forEach(botao => {
        botao.classList.remove("active");
    });

    btnEncerramento.classList.add("active");

    atualizarBreadcrumb(
         "../index.html",
        "Encerramento Antecipado",
        "Afastamento Integral",
        "afastintegral.html"
    );


    mostrarCards(
        encerramento,
        "card-encerramento"
    );

});

btnIndeferimentos.addEventListener("click", function () {

    document.querySelectorAll("aside button").forEach(botao => {
        botao.classList.remove("active");
    });

    btnIndeferimentos.classList.add("active");

    atualizarBreadcrumb(
         "../index.html",
        "Indeferimentos",
        "Afastamento Integral",
        "afastintegral.html"
    );

    mostrarCards(
        indeferimento,
        "card-indeferimento"
    );

});


