const prompt=require("prompt-sync")();

let n=prompt("Dime la altura");
let contador=0;
/*
let n = 4
for(i = 0;i<n;i++){
    for(x=0;x<n*(n-i);x++){
        process.stdout.write(" ")
    }
    for(j=0;j<n*2;j++){
        process.stdout.write("*")
    }
    console.log()
}
    */
while(contador<n){
    for(let i=0;i<n;i++){
     process.stdout.write(" ".repeat((n*4)-(contador*4)));
     process.stdout.write("*".repeat((2*n)));
     console.log();
    }

    contador++;
    
}
