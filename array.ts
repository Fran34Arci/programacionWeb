import * as readlineSync from "readline-sync";

let num1:number = 0;

let mes : string[] = new Array(12);

mes[0] = "enero";
mes[1] = "febrero";
mes[2] = "marzo";
mes[3] = "abril"
mes[4] = "mayo";
mes[5] = "junio";
mes[6] = "julio";
mes[7] = "agosto";
mes[8] = "septiembre";
mes[9] = "octubre";
mes[10] = "noviembre";
mes[11] = "diciembre";

let num : number[] = new Array(12);
num[0] = 20;
num[1] = 14;
num[2] = 8;
num[3] = 0;
num[4] = 5;
num[5] = 19;
num[6] = 24;



num1 = readlineSync.questionInt("elija un numero ");


console.log("muesta lo del array " + mes[num1-1]);


switch(num1){

case(1):
console.log("lo del swich Enero");

break;

case(2):
console.log("lo del swich Febrero");

break;

}
let indice : number=0;
while(indice <7){

console.log("recorre array num " + num[indice] );
indice ++;

}



