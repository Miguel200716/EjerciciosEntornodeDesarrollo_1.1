/*
Algoritmo que lea un número por teclado. En caso de que ese número sea 0 o menor que 0, 
se saldrá del programa imprimiendo antes un mensaje de error. Si es mayor que 0, se deberá 
calcular su cuadrado y la raíz cuadrada del mismo, visualizando el número que ha tecleado el 
usuario y su resultado («Del número X, su potencia es X y su raíz X» ). 
Para calcular la raíz cuadrada se puede usar la función interna RAIZ(X)  o con una potencia de 0,5.
*/
let prompt = require('prompt-sync')();

let a = prompt("Dame un numero");
a=Number(a);

let noNumbs=true;


if (Number.isNaN(a)) {
    console.log("El numero introducido es invalido")
    noNumbs=false;
}



if(noNumbs){
if (a<=0){
    console.log("El numero introducido no es valido");

}else{
    let cuadrado= a*a;
    let raiz= Math.sqrt(a);

console.log(`El numero es = ${a}`);
console.log(`La potencia al cuadrado es = ${cuadrado}`);
console.log(`La raiz es = ${raiz}`);
}}else{
    console.log("No se pudo realizar el programa");
}