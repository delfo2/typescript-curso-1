export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    notifica() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    isTheSame(negociacaoTest) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacaoTest);
    }
}
