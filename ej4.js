/*Solicita por teclado tres números; si el primero es negativo, muestra el producto 
de los tres y si no lo es, muestra la suma.
*/
let prompt = require('prompt-sync')();

let a = prompt("introduzca a");
a = Number(a); 
let b = prompt("introduzca b");
b = Number(b);
let c=prompt("introduzca c");
c=Number(c);

let noNumbs=true;

if (Number.isNaN(a)){
     console.log("El valor 1 introducido no es un número");  
    okNumbs= false;  
}
if (Number.isNaN(b)){
     console.log("El valor 2 introducido no es un número");  
    okNumbs= false;  
}
if (Number.isNaN(c)){
     console.log("El valor 3 introducido no es un número");  
    okNumbs= false;  
}


let producto = a*b*c;
let suma = a+b+c;
if (a<0){
    console.log(`El producto de los tres es = ${producto}`);
}else{
     console.log(`El producto de los tres es = ${suma}`);
}