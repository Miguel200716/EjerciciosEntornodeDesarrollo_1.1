/*
 Dada una secuencia de números leídos por teclado, que acabe con un –1, por ejemplo: 5,3,0,2,4,4,0,0,2,3,6,0,……,-1; 
 Realizar el algoritmo que calcule la media aritmética. Suponemos que el usuario no insertará números negativos.
*/
const prompt = require("prompt-sync")();
let N;
let total=0;
let acumulador=0;

do{
     N = prompt("Dame los numeros que quieras , cuando sea -1 se acaba el programa");
N=Number(N);
if(N>-1){
    acumulador++;
total+=N;
}else if (N== -1){
    console.log("Se introduce valor final de secuencia");
}else{
    //n<-1
    console.log("Valor Incorrecto")
}


}while(N >-1) ;
console.log(`La media es ${total/acumulador}`);
