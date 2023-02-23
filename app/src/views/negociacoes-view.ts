import { Negociacoes } from "../models/negociacoes.js";
import { ElementoDOM } from "./elemento-dom.js";

export class NegociacoesView extends ElementoDOM<Negociacoes> {

    protected template (model : Negociacoes) : string {
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

    private formatar (data : Date) : string {
        return new Intl.DateTimeFormat().format(data);
    }
}