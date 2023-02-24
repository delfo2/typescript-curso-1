export class ElementoDOM {
    constructor(selector) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elementoDOM = elemento;
        }
        else {
            throw Error(`o seletor ${selector} não conseguiu encontrar o html element`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.elementoDOM.innerHTML = template;
    }
}
