
let prompt = require('prompt-sync')();

let a = prompt("introduzca a");
a = Number(a); 
let b = prompt("introduzca b");
b = Number(b);

let okNumbs= true;

if (Number.isNaN(a)) {
    console.log("El valor 1 introducido no es un número");  
    okNumbs= false;  
}
if (Number.isNaN(b)) {
    console.log("El valor 2 introducido no es un número");  
    okNumbs= false; 
}

if (okNumbs)
{
if (a > b) {
    console.log(`El valor mayor es ${a}`);
} else if (b > a) {
    console.log(`El valor mayor es ${b}`);
} else {
    console.log("Los dos valores son iguales");
}
}else{
    console.log("No se puede determinar el valor mayor debido a una entrada no numérica");
}
