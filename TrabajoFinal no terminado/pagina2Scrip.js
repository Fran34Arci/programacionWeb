"use strict";
//Carga las imagenes de los productos
let imagenes = ["C:/Users/MAGIA/OlavarraFps/clase1/TrabajoFinal/imagenes/carne.png",
"C:/Users/MAGIA/OlavarraFps/clase1/TrabajoFinal/imagenes/pollo.png",
"C:/Users/MAGIA/OlavarraFps/clase1/TrabajoFinal/imagenes/pescado.png",
"C:/Users/MAGIA/OlavarraFps/clase1/TrabajoFinal/imagenes/sandwiches.png",
"C:/Users/MAGIA/OlavarraFps/clase1/TrabajoFinal/imagenes/panL.png",
"C:/Users/MAGIA/OlavarraFps/clase1/TrabajoFinal/imagenes/chocolateS.png",
"C:/Users/MAGIA/OlavarraFps/clase1/TrabajoFinal/imagenes/jugoN.png",
"C:/Users/MAGIA/OlavarraFps/clase1/TrabajoFinal/imagenes/cerveza.png",
"C:/Users/MAGIA/OlavarraFps/clase1/TrabajoFinal/imagenes/banana.png",
"C:/Users/MAGIA/OlavarraFps/clase1/TrabajoFinal/imagenes/aceite.png",
];

//carga el nombre de los productos, el precio y el Stock... 
const productos = ["Kg Carne","Kg Pollo","Kg Pescado","Sandwiches","Pan Lactal","Salsa de Chocolate","Jugo de Naranja", "Cerveza", "Kg Banana", "Aceite"];

const stocks = [ "stock0","stock1","stock2","stock3","stock4","stock5","stock6","stock7","stock8","stock9"];

const precio = [5000,3500,2500,2000,2300,3400,1500,2200,1200,3000];

const stock = [23,40,10,10,10,10,15,200,20,25];


// variable y arreglos auxiliares para los metodos 
let inputsProd = new Array (9);

let compra = new Array (10);

let importeTotal = 0;


// carga cada div con su imagen, lable e inputs

const prod1 = document.getElementById("prod1");
prod1.innerHTML = `<img src=${imagenes[0]}>  
<label for"inputP1">Elija la Cantidad a llevar: </label>
<input id="inputP1" type = "number" max="${stock[0]}" min="0" value="disable">
<h3>${productos[0]}</h3>
<h3 id="stock0">Cantidad en stock :${stock[0]}</h3>
<h3>Precio en Pesos: ${precio[0]}</h3>`;

const prod2 = document.getElementById("prod2");
prod2.innerHTML = `<img src=${imagenes[1]}>  
<label for"inputP2">Elija la Cantidad a llevar: </label>
<input id="inputP2" type = "number" max="${stock[1]}" min="0" value="disable">
<h3>${productos[1]}</h3>
<h3 id="stock1">Cantidad en stock :${stock[1]}</h3>
<h3>Precio en Pesos: ${precio[1]}</h3>`;

const prod3 = document.getElementById("prod3");
prod3.innerHTML = `<img src=${imagenes[2]}>  
<label for"inputP3">Elija la Cantidad a llevar: </label>
<input id="inputP3" type = "number" max="${stock[2]}" min="0" value="disable">
<h3>${productos[2]}</h3>
<h3 id="stock2">Cantidad en stock :${stock[2]}</h3>
<h3>Precio en Pesos: ${precio[2]}</h3>`;

const prod4 = document.getElementById("prod4");
prod4.innerHTML = `<img src=${imagenes[3]}>  
<label for"inputP4">Elija la Cantidad a llevar: </label>
<input id="inputP4" type = "number" max="${stock[3]}" min="0" value="disable">
<h3>${productos[3]}</h3>
<h3 id="stock3">Cantidad en stock :${stock[3]}</h3>
<h3>Precio en Pesos: ${precio[3]}</h3>`;

const prod5 = document.getElementById("prod5");
prod5.innerHTML = `<img src=${imagenes[4]}>  
<label for"inputP5">Elija la Cantidad a llevar: </label>
<input id="inputP5" type = "number" max="${stock[4]}" min="0" value="disable">
<h3>${productos[4]}</h3>
<h3 id="stock4">Cantidad en stock :${stock[4]}</h3>
<h3>Precio en Pesos: ${precio[4]}</h3>`;

const prod6 = document.getElementById("prod6");
prod6.innerHTML = `<img src=${imagenes[5]}>  
<label for"inputP6">Elija la Cantidad a llevar: </label>
<input id="inputP6" type = "number" max="${stock[5]}" min="0" value="disable">
<h3>${productos[5]}</h3>
<h3 id="stock5">Cantidad en stock :${stock[5]}</h3>
<h3>Precio en Pesos: ${precio[5]}</h3>`;

const prod7 = document.getElementById("prod7");
prod7.innerHTML = `<img src=${imagenes[6]}>  
<label for"inputP7">Elija la Cantidad a llevar: </label>
<input id="inputP7" type = "number" max="${stock[6]}" min="0" value="disable">
<h3>${productos[6]}</h3>
<h3 id="stock6">Cantidad en stock :${stock[6]}</h3>
<h3>Precio en Pesos: ${precio[6]}</h3>`;

const prod8 = document.getElementById("prod8");
prod8.innerHTML = `<img src=${imagenes[7]}>  
<label for"inputP8">Elija la Cantidad a llevar: </label>
<input id="inputP8" type = "number" max="${stock[7]}" min="0" value="disable">
<h3>${productos[7]}</h3>
<h3 id="stock7">Cantidad en stock :${stock[7]}</h3>
<h3>Precio en Pesos: ${precio[7]}</h3>`;

const prod9 = document.getElementById("prod9");
prod9.innerHTML = `<img src=${imagenes[8]}>  
<label for"inputP9">Elija la Cantidad a llevar: </label>
<input id="inputP9" type = "number" max="${stock[8]}" min="0" value="disable">
<h3>${productos[8]}</h3>
<h3 id="stock8">Cantidad en stock :${stock[8]}</h3>
<h3>Precio en Pesos: ${precio[8]}</h3>`;

const prod10 = document.getElementById("prod10");
prod10.innerHTML = `<img src=${imagenes[9]}>  
<label for"inputP10">Elija la Cantidad a llevar: </label>
<input id="inputP10" type = "number" max="${stock[9]}" min="0" value="disable">
<h3>${productos[9]}</h3>
<h3 id="stock9">Cantidad en stock :${stock[9]}</h3>
<h3>Precio en Pesos: ${precio[9]}</h3>`;


let proDT = document.getElementById("proDT");
let diVCompra = document.getElementById("compraT");
let btnprod1 = document.getElementById("btnprod1");
let btnprod4 = document.getElementById("btnprod4");

let auxbtn4 = false;
let auxbtn1 = false;



function prueba(){
let auxCP = false;
  
    inputsProd[0] = document.getElementById("inputP1").value;
    inputsProd[1] = document.getElementById("inputP2").value;
    inputsProd[2] = document.getElementById("inputP3").value;
    inputsProd[3] = document.getElementById("inputP4").value;
    inputsProd[4] = document.getElementById("inputP5").value;
    inputsProd[5] = document.getElementById("inputP6").value;
    inputsProd[6] = document.getElementById("inputP7").value;
    inputsProd[7] = document.getElementById("inputP8").value;
    inputsProd[8] = document.getElementById("inputP9").value;
    inputsProd[9] = document.getElementById("inputP10").value;

for (let x = 0; x <= (inputsProd.length-2); x++){

if(inputsProd[x] <= -1){
   alert("ingresaste " + inputsProd[x] + " del producto " + productos[x] + " no puedes ingresar 0 o menos de 0 unidades");
}else if(inputsProd[x] > stock[x]){
    alert("ingresaste " + inputsProd[x] + " del producto " + productos[x] + " no hay stock disponible solos hasta " + stock[x] + " unidades");
}

if (inputsProd[x] > 0 && inputsProd[x] <= stock[x]) {

auxCP = true;
let cantP1 = inputsProd[x] * precio[x];

importeTotal = cantP1 + importeTotal; 

compra[x] = "llevas " + inputsProd[x] + " del producto " + productos[x] + " por un valor de " + cantP1;

}

}
if(auxCP == true){   
compra[10] = "el importe total es de: "+ importeTotal;
auxbtn1 = true;
if(auxbtn1 == true){
  btnprod1.setAttribute("disabled","false");

  auxbtn4 = true;
 
  cargarCompra();
}

}
}
    
function aceptarComp(){
  if (auxbtn4 == true){
  for (let x = 0; x <= (inputsProd.length-1); x++){
  stock [x] = stock[x] - inputsProd[x];
  document.getElementById(stocks[x]).innerHTML= "Cantidad en stock :" + stock[x];
  }
}
auxbtn4 = false;
}

function borrarT() {

for(let w = 0; w <= (compra.length-1); w++){
let li1 = document.querySelector("li");
li1.remove();
}
limpiarDatos();

auxbtn4 = false;
if(auxbtn4 == false){
  btnprod4.removeAttribute('disabled');
}
auxbtn1 = false;
if(auxbtn1 == false){
  btnprod1.removeAttribute('disabled');
}

}



function cargarCompra(){
  
for(let c=0; c<= (compra.length-1); c++){
let li1 = document.createElement("li");
if(compra[c] == "") {  

li1.textContent ="";
proDT.appendChild(li1);

}else{ 
li1.textContent = compra[c];
proDT.appendChild(li1);
}
}

}


function limpiarDatos(){

for(let i =0; i<= (compra.length - 1); i++){
compra[i]=0;
console.log(compra[i]);
}
inputP1.value = "";
inputP2.value = "";
inputP3.value = "";
inputP4.value = "";
inputP5.value = "";
inputP6.value = "";
inputP7.value = "";
inputP8.value = "";
inputP9.value = "";
inputP10.value = "";
importeTotal = 0;

console.log("el arreglo " + compra + " el importe total "+ importeTotal);

}














