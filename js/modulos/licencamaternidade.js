const btnConcessoes =
document.querySelector("#btn-concessoes");


const concessoes = [

    {

        titulo:
        "Para licença maternidade e prorrogação por via administrativa",

        pagina:
        "../pareceres/lic-maternidade.html"

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
        "Licença Maternidade e Prorrogação",
        "licencamaternidade.html"
    );

    mostrarCards(
        concessoes,
        "card-concessao"
    );

});

