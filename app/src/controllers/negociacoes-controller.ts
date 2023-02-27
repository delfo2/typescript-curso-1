import { domInjector } from "../decorator/dom-injetor.js";
import { inspect } from "../decorator/inspect.js";
import { logarTempoDeExecucao } from "../decorator/logar-tempo-de-execução.js";
import { DiasDaSemana } from "../enums/DiasDaSemana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { NegociacoesServiceAPI } from "../services/Negocacoes-service-api.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { Imprimir } from "../utils/imprimir.js";

export class NegociacaoController {
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacaoView = new NegociacoesView("#negociacoesView");
    private mensagemView = new MensagemView('#mensagemView')
    private negociacoesService = new NegociacoesServiceAPI;
    
    constructor () {
        this.negociacaoView.update(this.negociacoes);
    }

    //@logarTempoDeExecucao()
    public adiciona () : void {
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

        Imprimir(negociacao, this.negociacoes);
                
        this.atualizaView();
        this.limpaFormulario();
    }

    public importaDados () : void {
        this.negociacoesService
            .obterNegociacoesDoDia()
            .then(negociacoesAPI => {
                return negociacoesAPI.filter(negociacoesAPI => {
                    return !this.negociacoes
                        .lista()
                        .some(item => item.isTheSame(negociacoesAPI))
                })
            })
            .then(negociacoesAPI => {
                for(let novaNegociacao of negociacoesAPI) {
                    this.negociacoes.adiciona(novaNegociacao);
                }
                this.atualizaView();
            })
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