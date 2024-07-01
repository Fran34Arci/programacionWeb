"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_fs_1 = require("node:fs");
var precios = [525, 3500, 400, 1999];
var productos = ["Leche", "Galletitas", "Harina", "Queso"];
var AuxS = "";
var AuxN = "";
for (var x = 0; x < productos.length; x++) {
    AuxS = AuxS + productos[x] + " ";
}
for (var i = 0; i < precios.length; i++) {
    AuxN = AuxN + precios[i].toString() + " ";
}
node_fs_1.default.writeFileSync('./productos.txt', AuxS);
node_fs_1.default.writeFileSync('./precios.txt', AuxN);
var datos1 = node_fs_1.default.readFileSync('./productos.txt', 'utf8');
var datos2 = node_fs_1.default.readFileSync('./precios.txt', 'utf8');
var datos3 = datos1 + datos2;
var AuxSArray = datos3.split(" ");
console.log("trae los datos de Productos y precios " + AuxSArray);
