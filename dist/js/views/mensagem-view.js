import { ElementoDOM } from "./elemento-dom.js";
export class MensagemView extends ElementoDOM {
    template(model) {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}
