export abstract class ElementoDOM<T> {
    protected elementoDOM : HTMLElement;

    constructor(selector : string) {
        this.elementoDOM = document.querySelector(selector);
    }
    
    public update (model : T) : void {
        const template = this.template(model);
        this.elementoDOM.innerHTML = template;
    }

    protected abstract template (model : T) : string;
}
