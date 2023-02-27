import { Comparavel } from "./comparavel.js";
import { Imprimivel } from "./imprimivel.js";

export interface BasicModel<T> extends Comparavel<T>, Imprimivel {}