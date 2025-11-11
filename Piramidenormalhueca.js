const prompt=require("prompt-sync")();

let n=prompt("Dime la altura");

let contador = 0;
while (contador < n) {
    // Espacios a la izquierda
    process.stdout.write(" ".repeat(n - 1 - contador));

    if (contador === 0) {
        // La primera fila solo tiene un "*"
        process.stdout.write("*");
    } else if (contador === n - 1) {
        // La última fila está llena de "*"
        process.stdout.write("*".repeat(2 * contador + 1));
    } else {
        // Bordes con espacios en medio
        process.stdout.write("*");
        process.stdout.write(" ".repeat(2 * contador - 1));
        process.stdout.write("*");
    }

    console.log(); // Salto de línea
    contador++;
}