import { ElementoDOM } from "./elemento-dom.js";

export class MensagemView extends ElementoDOM {

    template (model : string) : string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }

    update (model : string) : void {
        const template = this.template(model);
        this.elementoDOM.innerHTML = template;
    }
}