const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const logado = Boolean(urlParams.get('logado'));

const modalInteresseSucesso = document.getElementById('modalInteresseSucesso');
const dropdownLogado = document.getElementById('menu-logado');
const listEntrarRegistrar = document.getElementById('menu-deslogado');
const linkTenhoInteresse = document.getElementById("linkTenhoInteresse");
const botaoTenhoInteresse = document.getElementById("botaoTenhoInteresse");

if (queryString && logado) {
    dropdownLogado.classList.toggle('d-none');
    listEntrarRegistrar.classList.toggle('d-none');
    linkTenhoInteresse.classList.toggle('d-none');
}else{
    if(botaoTenhoInteresse) {
        botaoTenhoInteresse.classList.toggle('d-none');
    }
}
