function mostrarCards(lista, classeCss) {

    
    const conteudo = document.querySelector("#conteudo");

      conteudo.innerHTML = "";

      lista.forEach(function(item) {

      const card = document.createElement("div");

      card.classList.add("menu-card");

      card.classList.add(classeCss);

      card.textContent = item.titulo;

      card.addEventListener("click", function () {

            window.location.href = item.pagina;

        });

        conteudo.appendChild(card);

    });

}