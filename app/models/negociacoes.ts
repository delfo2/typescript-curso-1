import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];
}

const negociacoes = new Negociacoes();
negociacoes.adiciona(negociacoes);