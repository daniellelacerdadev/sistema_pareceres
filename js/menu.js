//======= Menu breadcrumbs ====//

function atualizarBreadcrumb(linkInicio,
    menu,
    pagina,
    linkMenu) {

    const breadcrumb = document.querySelector("#breadcrumb");

    breadcrumb.innerHTML = `
        <a href="${linkInicio}">Início</a>
        &nbsp;>&nbsp;
        <a href="${linkMenu}">${menu}</a>
        &nbsp;>&nbsp;
        <span>${pagina}</span>
    `;

}