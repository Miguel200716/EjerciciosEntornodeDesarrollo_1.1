/*
7. Algoritmo que lea números enteros hasta teclear 0, y nos muestre el máximo, el mínimo y la media de todos ellos.
*/

const prompt = require("prompt-sync")();
let n;
let min;
let max;
let contador=0;
let acumulador=0;
do{
    n=prompt("Dame numeros enteros");
    n=Number(n);
    if (n>0){

    if (max===undefined){
      max=n;
    }
    if (n>max){
        max=n;
    }
    if (min===undefined){
      min=n;
    }
    if (n<max){
        min=n;
    }
    contador++;
    acumulador+=n;
    }
    
}while(n!== 0);

console.log(`El maximo es ${max}`);
console.log(`El minimo es ${min}`);
console.log(`La media  es ${acumulador/contador}`);