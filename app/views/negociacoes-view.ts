export class NegociacoesView {

    private elementoDOM : HTMLElement;

    constructor (seletor : string) {
        this.elementoDOM = document.querySelector(seletor);
    }

    template () : string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>

                <tbody>
                </tbody>
            </table>
        `;
    }

    update () : void {
        this.elementoDOM.innerHTML = this.template();
    }
}