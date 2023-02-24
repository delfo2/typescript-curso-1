export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`inicio do Dom Injector para a varíavel ${propertyKey}`);
        let elemento = null;
        const getter = function () {
            if (!elemento) {
                console.log(`selecionando o seletor ${seletor} para a varíavel ${propertyKey}`);
                elemento = document.querySelector(seletor);
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}