// ==========================
// BOTÕES
// ==========================

const btnConcessoes =
document.querySelector("#btn-concessoes");

const btnEncerramento =
document.querySelector("#btn-encerramento");


const concessoes = [

    {

        titulo:
        "Para servidores estudantes",

        pagina:
        "../pareceres/horario-especial-estudante/hee-concessoes.html"

    },
  
];

const encerramento = [
    {
        titulo:
        "Para encerramento antecipado do horário especial de estudante",

        pagina:
        "../pareceres/horario-especial-estudante/hee-encerramento.html"
    },

  ]
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
        "Horário Especial de Estudante",
        "heestudante.html"
    );

    mostrarCards(
        concessoes,
        "card-concessao"
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
        "Horário Especial de Estudante",
        "heestudante.html"
    );


    mostrarCards(
        encerramento,
        "card-encerramento"
    );

});


