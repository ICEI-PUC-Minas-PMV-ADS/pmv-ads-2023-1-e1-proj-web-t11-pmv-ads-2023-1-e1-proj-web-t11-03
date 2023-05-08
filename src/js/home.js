const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const logado = Boolean(urlParams.get('logado'));

const dropdownLogado = document.getElementById('menu-logado');
const listEntrarRegistrar = document.getElementById('menu-deslogado');

if (logado === true) {
    dropdownLogado.classList.toggle('d-none');
    listEntrarRegistrar.classList.toggle('d-none');
}