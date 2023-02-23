var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { escapar } from "../decorator/escapar.js";
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
            <script>console.log("olá, você teve um script intrusivo encontrado")</script>
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
__decorate([
    escapar()
], NegociacoesView.prototype, "template", null);
