/*
Una tienda ofrece un descuento del 15% sobre el total de la compra durante 
el mes de octubre. Dado un mes y un importe, calcular cuál es la cantidad que se debe cobrar al cliente.

*/
let prompt = require('prompt-sync')();

let mes=prompt("Introduzca un mes");
let importe=prompt("Introduzca el importe");

 mes = mes.toLowerCase();
if (mes==="octubre"){
     
    let descuento= importe *(15/100)
    let importeTotal= importe-descuento;
    console.log(`El precio ha sido rebajado de ${importe}$ a ${importeTotal}$.`);
} else {
    console.log(`El precio sigue siendo el mismo , no hay rebajas.`)
}

