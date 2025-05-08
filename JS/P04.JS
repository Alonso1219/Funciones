// Generación de objetos
const txtpeso = document.getElementById("peso");
const txtaltura = document.getElementById("altura");
const resultado = document.getElementById("resultado");
const btnCalcular = document.getElementById("btnCalcular");

// Función para calcular IMC
function calcularIMC() {
    let peso = parseFloat(txtpeso.value);
    let altura = parseFloat(txtaltura.value);

    // Validación: verifica que ambos valores sean válidos
    if (isNaN(peso) || isNaN(altura) || altura <= 0) {
        resultado.innerHTML = "Por favor, ingrese peso y altura válidos.";
        return;
    }

    // Cálculo correcto del IMC
    const imc = peso / (altura * altura);
    let nivel = "";

    if (imc < 18.5) {
        nivel = "Bajo peso";
    } else if (imc < 24.9) {
        nivel = "Normal";
    } else if (imc < 29.9) {
        nivel = "Sobrepeso";
    } else {
        nivel = "Obesidad";
    }

    resultado.innerHTML = `Tu IMC es <strong>${imc.toFixed(2)}</strong> - Nivel: <strong>${nivel}</strong>`;
}

// Evento
btnCalcular.addEventListener('click', calcularIMC);

const btnReiniciar = document.getElementById("btnReiniciar");

function reiniciarFormulario() {
    txtpeso.value = "";
    txtaltura.value = "";
    resultado.innerHTML = "";
}

btnReiniciar.addEventListener('click', reiniciarFormulario);
