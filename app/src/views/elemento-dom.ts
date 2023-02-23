import { logarTempoDeExecucao } from "../decorator/logar-tempo-de-execução.js";

export abstract class ElementoDOM<T> {
    protected elementoDOM : HTMLElement;

    constructor(selector : string) {
        const elemento = document.querySelector(selector);
        if(elemento) {
            this.elementoDOM = elemento as HTMLElement;
        } else {
            throw Error(`o seletor ${selector} não conseguiu encontrar o html element`);
        }
    }
    
    @logarTempoDeExecucao()
    public update (model : T) : void {
        let template = this.template(model);
        this.elementoDOM.innerHTML = template;
    }

    protected abstract template (model : T) : string;
}
