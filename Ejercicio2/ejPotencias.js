"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var num1 = 0;
var numPot = 0;
var result = 0;
function potencia(numAux1, numAux2) {
    result = Math.pow(numAux1, numAux2);
    console.log("el reultado de " + numAux1 + " elevado a " + numAux2 + " es:  " + result);
}
num1 = readlineSync.question("ingrese un numero: ");
numPot = readlineSync.question("ingrese la potencia: ");
if (numPot <= 0) {
    while (numPot <= 0) {
        console.log("Ingrese otro valor de potencia");
        numPot = readlineSync.question("ingrese la potencia: ");
        if (numPot <= 0) {
            console.log("La potencia ingresada es invalida");
        }
        else {
            potencia(num1, numPot);
        }
    }
}
else {
    potencia(num1, numPot);
}
