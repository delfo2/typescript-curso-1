import { NegociacaoController } from "./controllers/negociacoes-controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error(`o formulário ${form} não pode ser encontrado pelo query selector.`);
}
