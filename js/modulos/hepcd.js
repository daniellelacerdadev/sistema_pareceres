// ==========================
// BOTÕES
// ==========================

const btnConcessoes =
document.querySelector("#btn-concessoes");

const btnEncerramento =
document.querySelector("#btn-encerramento");

const btnIndeferimentos =
document.querySelector("#btn-indeferimento");


const concessoes = [

    {

        titulo:
        "Para servidores PcD",

        pagina:
        "../pareceres/horario-especial-pcd/hepcd-servidor.html"

    },

    {

        titulo:
        "Para servidores com familiar PcD",

        pagina:
        "../pareceres/he-especial-pcd/hepcd-familiar.html"

    }
  
];

const encerramento = [
    {
        titulo:
        "Para encerramento antecipado do horário especial para servidor PcD",

        pagina:
        "../pareceres/horario-especial-pcd/he-encer-servidor.html"
    },

{
        titulo:
        "Para encerramento antecipado do horário especial para servidor com familiar PcD",

        pagina:
        "../pareceres/horario-especial-pcd/he-encer-familiar.html"
    }
];

const indeferimento = [
    {
        titulo:
        "Para indeferimento de horário especial de servidor PcD",

        pagina:
        "../pareceres/horario-especial-pcd/hepcd-indef-servidor.html"
    },

    {
        titulo:
        "Para indeferimento de horário especial de servidor com familiar PcD",

        pagina:
        "../pareceres/horario-especial-pcd/hepcd-familiar.html"
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
        "Horário Especial para PcD",
        "hepcd.html"
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
        "Horário Especial para PcD",
        "hepcd.html"
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
        "Horário Especial para PcD",
        "hepcd.html"
    );

    mostrarCards(
        indeferimento,
        "card-indeferimento"
    );

});


