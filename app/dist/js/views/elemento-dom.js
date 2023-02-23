export class ElementoDOM {
    constructor(selector, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elementoDOM = elemento;
        }
        else {
            throw Error(`o seletor ${selector} não conseguiu encontrar o html element`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, "");
        }
        this.elementoDOM.innerHTML = template;
    }
}
