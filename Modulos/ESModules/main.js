// Podemos criar módulos para organizar melhor o código.
// Nesse caso criamos a função sum em um arquivo separado com a palavra reservada exeport, dessa forma ele se toda visível para outros arquivosm, nesse caso o main.js

/* import { sum, multiply } from "./calc.js"; */

import * as calc from "./calc.js";/*  */
// Com importação padrão podemos passar dessa forma mais simples.
import { menusToNumber } from "./calc.js";
// Outra forma de realizar o import do objeto.
import { sum as soma } from "./calc.js";
// Importando a classe Calc
import { Calc } from "./calc.js";
const calcDivide = new Calc();

console.log(" 6 / 2 =", calcDivide.divide(6, 2));


console.log(" 5 - 3 =", menusToNumber(5, 3));
console.log(" 4 + 7 =", soma(4, 7));
console.log(" 2 + 3 =", calc.sum(2, 3));
console.log(" 2 * 3 =", calc.multiply(2, 3));