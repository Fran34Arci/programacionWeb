import * as readlineSync from "readline-sync";

let numerosX : number[] = new Array(4,7,9,3,1,45,67,23,29,78,11,16);

function arregloDescendente( Aux:number[]){
    for(let x : number = 0; x <= (Aux.length); x++ ){ 
         for (let i : number = 0; i < Aux.length-x-1; i++) {
             if(Aux[i] < Aux[i+1]){
                 let AuxCambio2 = Aux[i+1];
                Aux[i+1] = Aux[i];
                 Aux[i] = AuxCambio2;   
            }
        } 
    }
}

function arregloAscendente( Aux:number[]){
    for(let x : number = 0; x <= (Aux.length); x++ ){
        for (let i : number = 0; i < Aux.length-x-1; i++) {
            if(Aux[i] > Aux[i+1]){
                 let AuxCambio1 = Aux[i+1];
                 Aux[i+1] = Aux[i];
                Aux[i] = AuxCambio1;
                   
                }
            }
        }
    }


console.log("tamaño del arreglo " + numerosX.length);
console.log("numeros del arreglo " + numerosX);

arregloDescendente(numerosX);
console.log("el arreglo de forma descendente " + numerosX);

arregloAscendente(numerosX);
console.log("el arreglo de forma ascendente " + numerosX);


