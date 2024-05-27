"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var vuelta1 = readlineSync.questionInt("Ingrese el tiempo de la primera Vuelta ");
var vuelta2 = readlineSync.questionInt("Ingrese el tiempo de la segunda Vuelta ");
var vuelta3 = readlineSync.questionInt("Ingrese el tiempo de la tercera Vuelta ");
var vuelta4 = readlineSync.questionInt("Ingrese el tiempo de la cuarta Vuelta ");
console.log("Tiempo Total " + (vuelta1 + vuelta2 + vuelta3 + vuelta4) + "\n" +
    "El promedio por vuelta es " + ((vuelta1 + vuelta2 + vuelta3 + vuelta4) / 4));
