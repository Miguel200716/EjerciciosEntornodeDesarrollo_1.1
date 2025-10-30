/*4. Se pide representar el algoritmo que nos calcule la suma de los N primeros 
 números pares. Es decir, si insertamos un 10, tendremos la suma de 2+4+6+8+10.
*/

const prompt = require("prompt-sync")();

let N = prompt("Dame el numero");

N= Number(N);
let acumulador=0;
let contador=0;
let total=0;
while(contador<N){

acumulador+=2;
console.log(acumulador);
total=total+acumulador;
contador++;

}

console.log(`La suma de los numeros pares es: ${total}`);