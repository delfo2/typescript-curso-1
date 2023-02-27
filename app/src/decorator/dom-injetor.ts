export function domInjector (seletor : string) {
    return function (target : any, propertyKey : string) {

        //console.log(`inicio do Dom Injector para a varíavel ${propertyKey}`);
        let elemento : HTMLElement | null = null
        
        const getter = function () {
            if(!elemento) {
                //console.log(`selecionando o seletor ${seletor} para a varíavel ${propertyKey}`);
                elemento = <HTMLElement>document.querySelector(seletor);
            }
            return elemento;
        }
        
        Object.defineProperty(
            target,
            propertyKey,
            {get : getter}
        );
    }
}