const prompt = require("prompt-sync")();
/*9. Modifica el algoritmo anterior para que se muestre el interior del cuadrado hueco.

****
*  *
*  *
****

*/
let n=Number(prompt("Introduzca num:"));
let fila="*".repeat(n);

console.log(fila);

for (let i=0;i<n-2;i++){

    for (let j=0;j<n;j++){

        if(j>0 && j<n-1){
        process.stdout.write(" ");
        }else{
        process.stdout.write("*");

        }

    }
    console.log("");
}

console.log(fila);
