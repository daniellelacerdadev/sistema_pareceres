const btnConcessoes =
document.querySelector("#btn-concessoes");


const concessoes = [

    {

        titulo:
        "Para Licença Gestante por via administrativa",

        pagina:
        "../pareceres/lic-gestante.html"

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
        "Licença Gestante e Prorrogação",
        "licencamaternidade.html"
    );

    mostrarCards(
        concessoes,
        "card-concessao"
    );

});

