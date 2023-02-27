import { BasicModel } from "../interface/Basic-Model.js";

export class Negociacao implements BasicModel<Negociacao>{
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.quantidade * this.valor;
    }

    get data() : Date {
        const data = new Date (this._data.getTime())
        return data;
    }

    public notifica() : string {
        return `DATA: ${this.data}, QUANTIDADE: ${this.quantidade}, VALOR: ${this.valor}`;
    }
    
    public isTheSame (negociacao : Negociacao) : boolean {
        return this.quantidade === negociacao.quantidade
            && this.valor === negociacao.valor
            && this.data.getDate() === negociacao.data.getDate()
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear();
    }

    public static criaDe (dataString : string, quantidadeString : string, valorString : string) : Negociacao {
        const exp = /-/g;
        const data = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(data, quantidade, valor);
    }
}