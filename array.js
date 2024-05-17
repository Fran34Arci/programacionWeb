"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var num1 = 0;
var mes = new Array(12);
mes[0] = "enero";
mes[1] = "febrero";
mes[2] = "marzo";
mes[3] = "abril";
mes[4] = "mayo";
mes[5] = "junio";
mes[6] = "julio";
mes[7] = "agosto";
mes[8] = "septiembre";
mes[9] = "octubre";
mes[10] = "noviembre";
mes[11] = "diciembre";
num1 = readlineSync.questionInt("elija un numero ");
console.log("muesta lo del array " + mes[num1 - 1]);
switch (num1) {
    case (1):
        console.log("lo del swich Enero");
        break;
    case (2):
        console.log("lo del swich Febrero");
        break;
}
