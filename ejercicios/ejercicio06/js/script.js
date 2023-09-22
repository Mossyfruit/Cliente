"use strict"

/**
 * En el sexto ejercicio saludamos y nos despedimos con botones usando el nombre registrado por el usuario mediante prompt.
 */

/**
 * Definimos la variable "nombre", usando la funcion prompt
 */
let nombre = prompt("Introduce tu nombre","Usuario")

/**
 * Generamos las funciones saludar() y despedir()
 */

function saludar(){
    alert(`Hola ${nombre}`);
}

function despedir(){
    alert(`Adios ${nombre}`);
}