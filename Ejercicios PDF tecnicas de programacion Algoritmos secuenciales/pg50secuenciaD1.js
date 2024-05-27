"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var precio = 0;
var descuento = 0;
precio = readlineSync.questionInt("ingrese el precio del producto: ");
descuento = (10 * precio) / 100;
console.log("el precio del producto con el 10% de descuento es " + (precio - descuento));
