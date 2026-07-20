// ==========================
// BOTÕES
// ==========================

const btnConcessoes =
document.querySelector("#btn-concessoes");

const concessoes = [

    {

        titulo:
        "Para Afastamento do País com ônus Limitado",

        pagina:
        "../pareceres/afastamento-pais/afastpais-onuslim.html"

    },

    {

        titulo:
        "Para Afastamento do País com ônus ao IFC",

        pagina:
        "../pareceres/afastamento-pais/afastpais-onusifc.html"

    },

    {

        titulo:
        "Para Afastamento do País Sem Ônus",

        pagina:
        "../pareceres/afastamento-pais/afastpais-semonus.html"

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
        "Afastamento do País",
        "afastamentopais.html"
    );

    mostrarCards(
        concessoes,
        "card-concessao"
    );

});

