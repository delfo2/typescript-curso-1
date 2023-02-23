export abstract class ElementoDOM<T> {
    protected elementoDOM : HTMLElement;

    private escapar = false;

    constructor(selector : string, escapar? : boolean) {
        const elemento = document.querySelector(selector);
        if(elemento) {
            this.elementoDOM = elemento as HTMLElement;
        } else {
            throw Error(`o seletor ${selector} não conseguiu encontrar o html element`);
        }
        if(escapar) {
            this.escapar = escapar;
        }
    }
    
    public update (model : T) : void {
        let template = this.template(model);

        if(this.escapar) {
            template = template.replace(/<script>[\s\S]*?<script>/, "");
        }

        this.elementoDOM.innerHTML = template;
    }

    protected abstract template (model : T) : string;
}
