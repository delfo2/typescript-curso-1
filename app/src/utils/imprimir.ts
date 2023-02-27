import { Imprimivel } from "../interface/imprimivel.js";

export function Imprimir (...parametros : Imprimivel[]) : void {
    for(let parametro of parametros) {
        console.log(parametro.notifica());
    }
}