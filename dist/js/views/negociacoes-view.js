import { ElementoDOM } from "./elemento-dom.js";
export class NegociacoesView extends ElementoDOM {
    template(model) {
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
                    ${model.lista().map(array => {
            return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(array.data)}</td>
                                <td>${array.quantidade}</td>
                                <td>${array.valor}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    update(model) {
        this.elementoDOM.innerHTML = this.template(model);
    }
}
