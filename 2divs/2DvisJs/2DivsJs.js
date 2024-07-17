"use strict";

let btn1 = document.getElementById("button1");
btn1.addEventListener("click",muestra2);

let btn2 = document.getElementById("button2");
btn2.addEventListener("click",muestra1);
/*
let numero2 = document.getElementsById("numero2");
let numero1 = document.getElementsById("numero1");
*/
function muestra2() {
    document.getElementById("numero2").style.visibility = "visible";
    document.getElementById("numero1").style.visibility = "hidden";
     }

function muestra1(){
    document.getElementById("numero1").style.visibility = "visible";
    document.getElementById("numero2").style.visibility = "hidden";
}

