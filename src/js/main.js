// Import our custom CSS
import '../scss/styles.scss';

// Import only the Bootstrap components we need
import { Popover } from 'bootstrap';

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })

import './home.js';
import {logar} from "./login";
import {cadastrar} from "./cadastro";

window.myFunctions = {};


window.myFunctions.logar = logar;
window.myFunctions.cadastrar = cadastrar;