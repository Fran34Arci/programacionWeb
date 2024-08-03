"use strict";

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const correo = document.getElementById("correo");
const telefono = document.getElementById("telefono");
const comentario = document.getElementById("comentario");

const btnenv = document.getElementById("btnenv");
const btncan = document.getElementById('btncan');


let informacion = new Array (3);



btnenv.addEventListener("click", (e) =>{
    e.preventDefault();

    let nomval = false;
   
if(nombre.value.length <3){
    alert("Nombre invalido, nececitas más de 3 caracteres");
    nomval = true;
}

if(apellido.value.length <3){
    alert("Apellido invalido, nececitas más de 3 caracteres");
    nomval = true;
}
//expreciones regulares para validar el email
let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

if(!regexEmail.test(correo.value)){
    alert("email invalido");
    nomval = true;
}

if(comentario.value.length < 50 ){
    alert("Comentario invalido, nececitas más de 50 caracteres");
    nomval = true;
}

if(nomval){
alert("Llene correctamente los campos");
}

else{
informacion [0] = nombre.value;
informacion [1] = correo.value;
informacion [2] = telefono.value;
informacion [3] = comentario.value;

let blob = new Blob([informacion], {type: "text/plain;charset = utf-8"});
//libreria FileSaver.js
saveAs(blob,"consulta.txt");
borrarinputs()

}


});

btncan.addEventListener("click", (e) =>{
    e.preventDefault();
    borrarinputs()

    });


    function borrarinputs(){

        nombre.value = "";
        apellido.value = "";
        correo.value = "";
        telefono .value = "";
        comentario.value = "";
    }