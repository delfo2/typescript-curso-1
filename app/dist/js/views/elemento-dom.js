var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { logarTempoDeExecucao } from "../decorator/logar-tempo-de-execução.js";
export class ElementoDOM {
    constructor(selector) {
        const elemento = document.querySelector(selector);
        if (elemento) {
            this.elementoDOM = elemento;
        }
        else {
            throw Error(`o seletor ${selector} não conseguiu encontrar o html element`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.elementoDOM.innerHTML = template;
    }
}
__decorate([
    logarTempoDeExecucao()
], ElementoDOM.prototype, "update", null);
