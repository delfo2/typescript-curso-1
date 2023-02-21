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
                                <td>${this.formatar(array.data)}</td>
                                <td>${array.quantidade}</td>
                                <td>${array.valor}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
