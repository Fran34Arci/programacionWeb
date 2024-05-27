import * as readlineSync from "readline-sync";


let base = readlineSync.questionInt("Ingrese la Base del triangulo ");
let altura = readlineSync.questionInt("Ingrese la Altura del triangulo ");

console.log("El area del triangulo es " + ((base * altura)/2));


