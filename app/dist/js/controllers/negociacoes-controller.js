var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorator/dom-injetor.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesServiceAPI } from "../services/Negocacoes-service-api.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { Imprimir } from "../utils/imprimir.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacaoView = new NegociacoesView("#negociacoesView");
        this.mensagemView = new MensagemView('#mensagemView');
        this.negociacoesService = new NegociacoesServiceAPI;
        this.negociacaoView.update(this.negociacoes);
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (!this.validaDiaUtil(negociacao.data)) {
            this.mensagemView.update('Favor adicionar em um dia útil');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        Imprimir(negociacao, this.negociacoes);
        this.atualizaView();
        this.limpaFormulario();
    }
    importaDados() {
        this.negociacoesService
            .obterNegociacoesDoDia()
            .then(negociacoesAPI => {
            return negociacoesAPI.filter(negociacoesAPI => {
                return !this.negociacoes
                    .lista()
                    .some(item => item.isTheSame(negociacoesAPI));
            });
        })
            .then(negociacoesAPI => {
            for (let novaNegociacao of negociacoesAPI) {
                this.negociacoes.adiciona(novaNegociacao);
            }
            this.atualizaView();
        });
    }
    validaDiaUtil(data) {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }
    limpaFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView.update('Transação adicionada com sucesso');
    }
}
__decorate([
    domInjector('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
