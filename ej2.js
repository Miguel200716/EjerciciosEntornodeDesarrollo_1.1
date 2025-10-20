/*
Se pide un algoritmo que lea dos números desde teclado, calculando y escribiendo en pantalla el valor de su suma, resta, producto y división.
*/
let prompt = require('prompt-sync')();

let okNumbs= true;

console.log("Introduzca dos números:");

let a = prompt("introduzca a");

if (Number(a) === NaN) {
    console.log("El valor introducido no es un número");  
    okNumbs= false;  
}
//type of a === "string";
a = Number(a);
//type of a === "Number";
let b = prompt("introduzca b");
if (Number(b) === NaN) {
    console.log("El valor introducido no es un número");  
    okNumbs= false;  
}
b = Number(b);

if (okNumbs) {
    let suma = a + b;
    let resta = a - b;
    let producto = a * b;
    let division = a / b;

    console.log(`El valor de la suma = ${suma}`);
    console.log(`El valor de la resta = ${resta}`);
    console.log(`El valor del producto = ${producto}`);
    console.log(`El valor de la división = ${division}`);
}