/*
Un colegio desea saber qué porcentaje de niños y qué porcentaje de niñas hay
 en el curso actual. Diseñar un algoritmo para este propósito.
*/

let prompt = require('prompt-sync')();

let a = prompt("introduzca a");
a = Number(a); 
let b = prompt("introduzca b");
b = Number(b);

let noNumbs=true;

if (Number.isNaN(a)){
     console.log("El valor de niños introducido no es un número");  
    okNumbs= false;  
}

if (Number.isNaN(b)){
     console.log("El valor de niñas introducido no es un número");  
    okNumbs= false;  
}

if(noNumbs){
      if(a&&b <=0){
        console.log("no hay o niños o niñas");  
      }else{
    
    let total=a+b;
    let porcentajeNiños= a/total*100;
    let porcentajeNiñas= b/total*100;
    console.log(`El numero total de niños es de ${total}`); 
    console.log(`El porcentaje de niños es de ${porcentajeNiños}%`); 
    console.log(`El porcentaje de niñas es de ${porcentajeNiñas}%`); 
      }

}else{
    console.log("ERROR");
}
