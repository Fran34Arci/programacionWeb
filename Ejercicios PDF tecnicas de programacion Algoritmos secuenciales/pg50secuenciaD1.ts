import * as readlineSync from "readline-sync";

let precio:number=0;
let descuento : number=0;

precio = readlineSync.questionInt("ingrese el precio del producto: ");

descuento = (10*precio)/100;

console.log("el precio del producto con el 10% de descuento es " + (precio - descuento));







