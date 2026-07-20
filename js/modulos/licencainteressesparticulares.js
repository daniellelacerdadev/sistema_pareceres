// ==========================
// BOTÕES
// ==========================

const btnConcessoes =
document.querySelector("#btn-concessoes");

const btnProrrogacoes =
document.querySelector("#btn-prorrogacoes");

const btnEncerramento =
document.querySelector("#btn-encerramento");


const concessoes = [

    {

        titulo:
        "Para concessão da licença",

        pagina:
        "../pareceres/licenca-interesses-particulares/lip-concessao.html"

    }

];

const prorrogacoes = [
    {
        titulo:
        "Para prorrogação da licença",

        pagina:
        "../pareceres/licenca-interesses-particulares/lip-prorrogacao.html"
    }

];

const encerramento = [
    {
        titulo:
        "Para encerramento antecipado da licença",

        pagina:
        "../pareceres/licenca-interesses-particulares/lip-encerramento.html"
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
        "Licença para tratar de interesses particulares",
        "licencainteressesparticulares.html"
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
        "Prorrogação",
        "Licença para tratar de interesses particulares",
        "licencainteressesparticulares.html"
    );

    mostrarCards(
        prorrogacoes,
        "card-prorrogacoes"
    );

});

btnEncerramento.addEventListener("click", function () {

    document.querySelectorAll("aside button").forEach(botao => {
        botao.classList.remove("active");
    });

    btnEncerramento.classList.add("active");

    atualizarBreadcrumb(
        "../index.html",
        "Encerramento",
        "Licença para tratar de interesses particulares",
        "licencainteressesparticulares.html"
    );

    mostrarCards(
        encerramento,
        "card-encerramento"
    );

});



