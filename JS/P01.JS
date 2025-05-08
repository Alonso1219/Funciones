// Seleccionamos los elementos del DOM
const valor = document.getElementById("valor");
const btnIncrementar = document.getElementById("incrementar");
const btnDisminuir = document.getElementById("disminuir");
const btnReiniciar = document.getElementById("reiniciar");

let contador = 0; // Inicializamos el contador

// Funciones
function incrementar() {
    contador++;
    valor.textContent = contador;
}

function decrementar() {
    contador--;
    valor.textContent = contador;
}

function iniciar() {
    contador = 0;
    valor.textContent = contador;
}

// Eventos
btnIncrementar.addEventListener("click", incrementar);
btnDisminuir.addEventListener("click", decrementar);
btnReiniciar.addEventListener("click", iniciar);
