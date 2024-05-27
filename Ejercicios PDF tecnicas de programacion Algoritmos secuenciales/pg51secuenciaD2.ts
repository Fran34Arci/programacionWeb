import * as readlineSync from "readline-sync"; 

let vuelta1 = readlineSync.questionInt("Ingrese el tiempo de la primera Vuelta ");
let vuelta2 = readlineSync.questionInt("Ingrese el tiempo de la segunda Vuelta ");
let vuelta3 = readlineSync.questionInt("Ingrese el tiempo de la tercera Vuelta ");
let vuelta4 = readlineSync.questionInt("Ingrese el tiempo de la cuarta Vuelta ");

console.log("Tiempo Total " + (vuelta1 + vuelta2 + vuelta3 + vuelta4) + "\n" +
 "El promedio por vuelta es " + (( vuelta1 + vuelta2 + vuelta3 + vuelta4 )/4));


