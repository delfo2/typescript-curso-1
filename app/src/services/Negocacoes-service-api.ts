import { NegociacoesAPI } from "../interface/Negociacoes-API.js"
import { Negociacao } from "../models/negociacao.js"

export class NegociacoesServiceAPI {
    public obterNegociacoesDoDia () : Promise<Negociacao[]> {
        return fetch('http://localhost:8080/dados')
        .then(res => res.json())
        .then((dados : Array<NegociacoesAPI>) => {
            return dados.map(dado => {
                return new Negociacao(new Date(), dado.vezes, dado.montante)
            })
        })
    }
}