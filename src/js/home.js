const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const logado = Boolean(urlParams.get('logado'));

const dropdownLogado = document.getElementById('menu-logado');
const listEntrarRegistrar = document.getElementById('menu-deslogado');
const modalInteresseSucesso = document.getElementById('modalInteresseSucesso');
const botaoTenhoInteresse = document.getElementById("botaoTenhoInteresse");
const linkTenhoInteresse = document.getElementById("linkTenhoInteresse");

if (queryString) {
    if (logado) {
        dropdownLogado.classList.toggle('d-none');
        listEntrarRegistrar.classList.toggle('d-none');
        linkTenhoInteresse.classList.toggle('d-none');
    }else{
        botaoTenhoInteresse.classList.toggle('d-none');
    }
}
