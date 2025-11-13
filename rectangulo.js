const prompt = require("prompt-sync")();
let base=prompt ("Dame la base");
let altura=prompt("Dame la altura");


for (let i=0;i<altura;i++){
     console.log("*".repeat(base));
}

