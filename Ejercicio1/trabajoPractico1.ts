import * as readlineSync from "readline-sync";

let numN1 : number = 0;
 

function parOimpar (numAux) {
    
    if (numAux % (2) ==0 ) {
        console.log("el numero es par");
        }
        else{
            console.log("el numero es impar");
        }
    
}
numN1 = readlineSync.question("ingrese un Numero: ");
if(numN1 != 0 ){
parOimpar(numN1);
}


while (numN1<=0) {
    

    if( numN1 ==0){
        console.log("cero no es un numero aceptable elija otro");
        numN1 = readlineSync.question("ingrese otro Numero: ");
    }

    if(numN1 != 0 ){
        parOimpar(numN1);
        }
     
}




    