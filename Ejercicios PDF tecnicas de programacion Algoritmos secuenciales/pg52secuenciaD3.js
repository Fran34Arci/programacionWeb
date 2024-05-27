"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var base = readlineSync.questionInt("Ingrese la Base del triangulo ");
var altura = readlineSync.questionInt("Ingrese la Altura del triangulo ");
console.log("El area del triangulo es " + ((base * altura) / 2));
