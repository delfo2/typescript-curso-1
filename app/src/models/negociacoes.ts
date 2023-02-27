import { BasicModel } from "../interface/Basic-Model.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements BasicModel<Negociacoes>{
    private negociacoes: Negociacao[] = [];

    public adiciona(negociacao : Negociacao) {
        this.negociacoes.push(negociacao);
    }

    public lista() : readonly Negociacao[] {
        return this.negociacoes;
    }

    public notifica () : string {
        return JSON.stringify(this.negociacoes, null, 2);
    }

    public isTheSame(negociacaoTest: Negociacoes) : boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacaoTest);
    }
}
