/*1)Desarrollar un algoritmo que dado un número, ingresado por el usuario determine si el número es par o impar y le informe al usuario
En el caso de ser 0 (cero) el algoritmo deberá  informarlo*/

import * as rls from "readline-sync";

/*

let num1 : number =0; 


num1 = rls.question(" Ingrese un numero " );

while (num1 == 0){
    num1 = rls.question(" Ingresaste el numero 0 debes ingresar otro numero " );
}

if (num1 % 2 == 0){
console.log("el numero ingresado " +  num1 + " es par ");
}
else {
    console.log("el numero ingresado " +  num1 + " es impar ");
}

*/

/*2)Realice un programa que devuelva la potencia de un número.
La base y el exponente deben ser ingresados por teclado.
Sólo deben admitirse exponentes mayores o iguales a cero.
Recuerde que el resultado de un numero elevado a 0 es 1.
Separe la lógica de calcular la potencia utilizando métodos.
(se resuelve con funciones)*/

/*
let num2 : number = 0;
let num3 : number = 0;

function potencia (aux1 :number, aux2 :number){
    let resultado : number = 1;
    for(let x =0; x <= aux2-1; x++){
    resultado = (resultado * aux1);
      }
  return resultado;
 }

     num2 = rls.question(" Ingrese un numero que desee elevar a X potencia " );
    num3 = rls.question(" Ingrese X " );

if(num3 == 0 ){ 
       console.log("el resultado es 1 todo numero elevado a 0 es igual a 1 ");
}
else{
console.log ("el resultado es " + potencia(num2 , num3));
}
*/

/*3)Dado el siguiente arreglo [4,7,9,3,1,45,67,23,29,78,11,16]
-Crear un programa que encuentre cuál es el número más grande del arreglo e imprimirlo por consola
-Almacenar el numero más grande en una variable global y pasarlo a una función para determinar
si el numero es par o impar
4)Implemente un algoritmo de ordenamiento con el método Bubble Sort para que ordene un arreglo 
de longitud N en orden descendente
*/

let arreglo1: number[]= new Array(4,7,9,3,1,45,67,23,29,78,11,16);

function parOimpar(numAux:number){
    if (numAux % 2 == 0){
        console.log("el numero ingresado " +  numAux + " es par ");
        }
        else {
         console.log("el numero ingresado " +  numAux + " es impar ");
        }
    }
    

function arregloDescendente( arrayAux:number[]){
for(let x : number = 0; x <= (arrayAux.length); x++){
    for (let i : number = 0; i < arreglo1.length-x-1; i++) {
        if(arrayAux[i] <= arrayAux[(i+1)]) {
            let AuxCambio = arrayAux[i+1];
            arrayAux[i+1] = arrayAux[i];
            arrayAux[i] = AuxCambio;   
            } 
        }
    }
    let numMas :number = arrayAux[0];  
console.log("el numero mas grande del arreglo es " + numMas)
parOimpar(numMas);
}

console.log("el arreglo " + arreglo1);
arregloDescendente(arreglo1);
console.log("el arreglo descendente " + arreglo1);




