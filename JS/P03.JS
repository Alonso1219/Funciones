// PASO 1: Obtener elementos del DOM
const opciones = document.getElementById('opciones');
const lblOperador = document.getElementById('lblOperador');
const txtNum1 = document.getElementById('txtNum1');
const txtNum2 = document.getElementById('txtNum2');
const resultado = document.getElementById('resultado');
const btnCalcular = document.getElementById('btnCalcular');

// Función para cambiar el operador visual según opción
function cambiarOperador() {
    let opcion = Number(opciones.value);

    switch (opcion) {
        case 1: lblOperador.textContent = "+"; break;
        case 2: lblOperador.textContent = "-"; break;
        case 3: lblOperador.textContent = "×"; break;
        case 4: lblOperador.textContent = "÷"; break;
        default: lblOperador.textContent = "?";
    }
}

// Función para realizar la operación
function realizarOperacion() {
    let num1 = Number(txtNum1.value);
    let num2 = Number(txtNum2.value);
    let opcion = Number(opciones.value);
    let res = 0;

    // Validación básica
    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Ingresa dos números válidos.";
        return;
    }

    switch (opcion) {
        case 1: res = num1 + num2; break;
        case 2: res = num1 - num2; break;
        case 3: res = num1 * num2; break;
        case 4:
            if (num2 === 0) {
                resultado.textContent = "Error: División entre cero.";
                return;
            }
            res = num1 / num2;
            break;
        default:
            resultado.textContent = "Operación no válida.";
            return;
    }

    resultado.textContent = `Resultado: ${res}`;
}

// Eventos
opciones.addEventListener('change', cambiarOperador);
btnCalcular.addEventListener('click', realizarOperacion);
