/*
Leer tres números que denoten una fecha (día, mes, año). Comprobar que es una fecha válida. Si no es válida escribir un mensaje de error. 
Si es válida escribir la fecha cambiando el número del mes por su nombre. Ej. si se introduce 1 2 2006, se deberá imprimir “1 de febrero de 2006”.
 El año debe ser mayor que 0.
*/

const prompt = require('prompt-sync')();
let dia = prompt("Dime el numero de día: ");
let mes = prompt("Dime el numero de mes: ");
let año = prompt("Dime el numero de año: ");

dia = Number(dia); 
mes = Number(mes);
año = Number(año); 

let flagFecha = true;



switch (mes) {
    case 0:
        if (dia <= 31){
        console.log(`${dia} de Enero de ${año}`);
        }else{
            flagFecha = false;
        }
        break;

    case 1:
        if (dia <= 28){
        console.log(`${dia} de Febrero de ${año}`);
        }else {
            flagFecha = false;
        }
        break;

    case 2:
        if (dia <= 31) {
            console.log(`${dia} de Marzo de ${año}`);
        }else{
         flagFecha = false;
        }
        break;

    case 3:
        if (dia <= 30){ 
            console.log(`${dia} de Abril de ${año}`);
        }else {
            flagFecha = false;
        }
        break;

    case 4:
        if (dia <= 31){
            console.log(`${dia} de Mayo de ${año}`);
    }else {
        flagFecha = false;
    }
        break;

    case 5:
        if (dia <= 30){ 
            console.log(`${dia} de Junio de ${año}`);
    }else{ 
    flagFecha = false;
    }
        break;

    case 6:
        if (dia <= 31){
             console.log(`${dia} de Julio de ${año}`);
        }else{
             flagFecha = false;
        }
        break;

    case 7:
        if (dia <= 31){
            console.log(`${dia} de Agosto de ${año}`);
        }else{ 
            flagFecha = false;
        }
        break;

    case 8:
        if (dia <= 30){ console.log(`${dia} de Septiembre de ${año}`);
    }else{ 
        flagFecha = false;
    }
        break;

    case 9:
        if (dia <= 31){
             console.log(`${dia} de Octubre de ${año}`);
        }else{ 
            flagFecha = false;
        }
        break;

    case 10:
        if (dia <= 30){ 
            console.log(`${dia} de Noviembre de ${año}`);
        }else{ 
            flagFecha = false;
        }
        break;

    case 11:
        if (dia <= 31){
             console.log(`${dia} de Diciembre de ${año}`);
        }else{ 
            flagFecha = false;
        }
        break;

    default:
        flagFecha = false; 
}
if (flagFecha === false) {
    console.log("ERROR");
}
if (año <= 0) {
    console.log("ERROR");
}
if (dia <= 0) {
    console.log("ERROR");
}
if (mes<= 0) {
    console.log("ERROR");
}