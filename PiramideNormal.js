const prompt=require("prompt-sync")();

let n=prompt("Dime la altura");

let contador=0;
while(contador<n){
     process.stdout.write(" ".repeat(n-1-contador));

     process.stdout.write("*".repeat(2*contador+1));

    console.log(); ///Salto de linea
     


    contador++;
}

