import { escapar } from "../decorator/escapar.js";
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
            <script>console.log("olá, você teve um script intrusivo encontrado")</script>
        `;
    }

    private formatar (data : Date) : string {
        return new Intl.DateTimeFormat().format(data);
    }
}