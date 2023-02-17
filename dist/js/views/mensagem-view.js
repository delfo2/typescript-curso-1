import { ElementoDOM } from "./elemento-dom.js";
export class MensagemView extends ElementoDOM {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
    update(model) {
        const template = this.template(model);
        this.elementoDOM.innerHTML = template;
    }
}
