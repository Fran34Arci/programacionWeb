import fs from "node:fs";

const precios : number[] = [525, 3500, 400, 1999]
const productos : string[] = ["Leche", "Galletitas", "Harina", "Queso"];

let AuxS : string = "";
let AuxN : string = "";

for(let x:number = 0; x < productos.length; x++){
AuxS = AuxS + productos [x]+ " ";
}

for(let i:number = 0; i < precios.length; i++){
AuxN = AuxN + precios [i].toString() + " ";
    }
fs.writeFileSync('./productos.txt', AuxS);
fs.writeFileSync('./precios.txt', AuxN);

const datos1  = fs.readFileSync('./productos.txt','utf8');
const datos2 = fs.readFileSync('./precios.txt','utf8');
const datos3 = datos1 + datos2;

const AuxSArray : string[] = datos3.split(" ") ;

console.log( "trae los datos de Productos y precios " + AuxSArray);