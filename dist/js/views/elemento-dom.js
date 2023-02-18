export class ElementoDOM {
    constructor(selector) {
        this.elementoDOM = document.querySelector(selector);
    }
    update(model) {
        const template = this.template(model);
        this.elementoDOM.innerHTML = template;
    }
}
