/*
Realizar un algoritmo que dado un número entero, visualice en pantalla si es par o impar. En el caso de ser 0, 
debe visualizar “el número no es par ni impar” (para que un número sea par, se debe dividir entre dos y que su resto sea 0).
*/
let prompt = require('prompt-sync')();

let a = prompt("introduzca a");
a = Number(a); 

let noNumbs=true;

if (Number.isNaN(a)){
     console.log("El valor introducido no es un número");  
    noNumbs= false;  
}


if (noNumbs){

    if (a===0){
        console.log("el número no es par ni impar");
    }else{
        resto=a%2;
        if(resto===0){
            console.log("el número es par ");
        }else{
             console.log("el número es impar ");
        }
    }
}else{
    console.log("ERROR");
}