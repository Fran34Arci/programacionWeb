"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var numN1 = 0;
function parOimpar(numAux) {
    if (numAux % (2) == 0) {
        console.log("el numero es par");
    }
    else {
        console.log("el numero es impar");
    }
}
numN1 = readlineSync.question("ingrese un Numero: ");
if (numN1 != 0) {
    parOimpar(numN1);
}
while (numN1 <= 0) {
    if (numN1 == 0) {
        console.log("cero no es un numero aceptable elija otro");
        numN1 = readlineSync.question("ingrese otro Numero: ");
    }
    if (numN1 != 0) {
        parOimpar(numN1);
    }
}
