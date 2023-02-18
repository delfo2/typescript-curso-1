import { ElementoDOM } from "./elemento-dom.js";

export class MensagemView extends ElementoDOM<string> {

    protected template (model : string) : string {
        return `
            <p class="alert alert-info">${model}</p>
        `;
    }
}