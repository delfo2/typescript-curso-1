import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacaoView = new NegociacoesView("#negociacoesView", true);
    private mensagemView = new MensagemView('#mensagemView', true)
    
    constructor () {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacaoView.update(this.negociacoes);
    }
    
    public adiciona (): void {
        //função pública que pode ser acessada fora da classe e que retorna void
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        );
        if(!this.validaDiaUtil(negociacao.data)) {
            this.mensagemView.update('Favor adicionar em um dia útil');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.atualizaView();
        this.limpaFormulario();
    }

    private validaDiaUtil (data : Date) : Boolean {
        return data.getDay() > DiasDaSemana.DOMINGO && data.getDay() < DiasDaSemana.SABADO;
    }

    private limpaFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView () : void {
        this.negociacaoView.update(this.negociacoes);
        this.mensagemView.update('Transação adicionada com sucesso');
    }
}