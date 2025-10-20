/*
Lee desde entrada dos variables numéricas A y B. Con ellas se pide realizar un algoritmo que intercambie
 los valores de ambas variables y muestre cuánto valen al final las dos variables.
 */

let prompt = require('prompt-sync')();

let a = prompt("introduzca a");

//type of a === "string";
a = Number(a);
//type of a === "Number";
let b = prompt("introduzca b");
b = Number(b);

let c = a;
a=b;
b=c;

console.log(`El valor de a = ${a} y b = ${b}`);

