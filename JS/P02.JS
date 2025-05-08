/* Paso 1 */
/* Obtener los objetos en variables en JavaScript */

// Declarar variables para el párrafo, botones y caja de texto
const parrafo = document.getElementById('parrafo');
const btnMay = document.getElementById('btnMay');
const btnMin = document.getElementById('btnMin');
const txtTexto = document.getElementById('txtTexto');
const btnAgregar = document.getElementById('btnAgregar');

// Variables globales para almacenar estilo original
var col = parrafo.style.color;
var tm = parrafo.style.fontSize;
var cf = parrafo.style.background;

// PASO 2: Declaración de funciones para modificar atributos
function cambiar() {
    parrafo.style.color = 'red';
    parrafo.style.fontSize = '20px';
    parrafo.style.background = 'yellow';
}

function normal() {
    parrafo.style.color = col;
    parrafo.style.fontSize = tm;
    parrafo.style.background = cf;
}

function mayusculas() {
    parrafo.textContent = parrafo.textContent.toUpperCase();
}

function minusculas() {
    parrafo.textContent = parrafo.textContent.toLowerCase();
}

function agregar() {
    let txt = txtTexto.value;
    parrafo.textContent += " " + txt;
    txtTexto.value = ''; // Limpia el input después de agregar
}

// PASO 4: Asociar los eventos a las funciones
parrafo.addEventListener('mouseover', cambiar);
parrafo.addEventListener('mouseout', normal);
btnMay.addEventListener('click', mayusculas);
btnMin.addEventListener('click', minusculas);
btnAgregar.addEventListener('click', agregar);
