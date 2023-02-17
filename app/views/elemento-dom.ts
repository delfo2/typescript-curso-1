export class ElementoDOM {
    protected elementoDOM : HTMLElement;

    constructor(selector : string) {
        this.elementoDOM = document.querySelector(selector);
    }
}