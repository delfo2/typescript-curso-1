export function Imprimir(...parametros) {
    for (let parametro of parametros) {
        console.log(parametro.notifica());
    }
}
