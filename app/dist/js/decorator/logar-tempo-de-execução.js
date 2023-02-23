export function logarTempoDeExecucao(emSegundos = false) {
    return function (target, propertyKey, descriptor) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1000;
            let tempo = 'segundos';
            if (emSegundos) {
                divisor = 1;
                tempo = 'milessegundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`o método ${propertyKey} demorou ${(t2 - t1) / divisor} ${tempo} para rodar.`);
            return retorno;
        };
        return descriptor;
    };
}
