const prompt = require("prompt-sync")();
/*8. Algoritmo que lea un número entero (lado) y a partir de él cree un cuadrado de asteriscos con ese tamaño.

Ejemplo, para lado = 4 escribiría:

****
****
****
****
*/
let n=Number(prompt("Introduzca num:"));
let fila="*".repeat(n);

for (let i=0;i<n;i++){

    console.log(fila);
}