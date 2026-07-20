// ==========================
// BOTÕES
// ==========================

const btnConcessoes =
document.querySelector("#btn-concessoes");

const btnAlteracoes =
document.querySelector("#btn-alteracao");

const btnInterrupcoes =
document.querySelector("#btn-interrupcao");

const btnIndeferimentos =
document.querySelector("#btn-indeferimento");


const concessoes = [

    {

        titulo:
        "Para ações de desenvolvimento",

        pagina:
        "../pareceres/licenca-capacitacao/acoes-desenvolvimento.html"

    },

    {

        titulo:
        "Para conclusão de trabalho de pós-graduação",

        pagina:
        "../pareceres/licenca-capacitacao/trabalho-posgrad.html"

    },

    {
         titulo:
        "Para curso com atividades práticas",

        pagina:
        "../pareceres/licenca-capacitacao/curso-atividades.html"
    },

    {
         titulo:
        "Para curso com trabalho voluntário",

        pagina:
        "../pareceres/licenca-capacitacao/curso-trabvoluntario.html"
    },

    {
         titulo:
        "Com ocorrências que alteram o quinquênio",

        pagina:
        "../pareceres/licenca-capacitacao/ocorrencia-quinquenio.html"
    }
];

const alteracao = [
    {

        titulo:
        "Para alteração de curso",

        pagina:
        "../pareceres/licenca-capacitacao/lc-alteracaocurso.html"

    }
];

const interrupcao = [
    {
        titulo:
        "Para interrupção de licença capacitação",

        pagina:
        "../pareceres/licenca-capacitacao/lc-interrupcao.html"
    }
];

const indeferimento = [
    {
        titulo:
        "Para indeferimento por ausência de interstício",

        pagina:
        "../pareceres/licenca-capacitacao/lc-indefintersticio.html"
    },

    {
        titulo:
        "Para indeferimento por quinquênio não concluído",

        pagina:
        "../pareceres/licenca-capacitacao/lc-indefquinq.html"
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
        "Licença Capacitação",
        "licencacapacitacao.html"
    );

    mostrarCards(
        concessoes,
        "card-concessao"
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
        "Licença Capacitação",
        "licencacapacitacao.html"
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
        "Interrupção da Licença",
        "Licença Capacitação",
        "licencacapacitacao.html"
    );


    mostrarCards(
        interrupcao,
        "card-interrupcao"
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
        "Licença Capacitação",
        "licencacapacitacao.html"
    );

    mostrarCards(
        indeferimento,
        "card-indeferimento"
    );

});


