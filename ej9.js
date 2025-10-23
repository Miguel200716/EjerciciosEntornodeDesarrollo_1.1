/*
Realizar algoritmo que nos diga si una persona puede acceder a cursar un ciclo formativo de grado superior o no. 
Para acceder a un grado superior, si se tiene un título de bachiller, en caso de no tenerlo, se puede acceder si 
hemos superado una prueba de acceso.
*/
let prompt = require('prompt-sync')();

let bachillerato = prompt("Has hecho bachiller?");
let prueba=prompt("Has aprobado la prueba de acceso?");

bachillerato=bachillerato.toLowerCase();
prueba=prueba.toLowerCase();

if(bachillerato==="si"){
    console.log("Bien!!! Puedes acceder al Grado Superior.");
    process.exit();
}

if (prueba==="si"){
    console.log("Bien!!! Puedes acceder al Grado Superior,sin bachillerato.");
}else{
     console.log("Lo siento , no puedes acceder al ciclo superior.");
}