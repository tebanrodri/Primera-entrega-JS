
const montoInput = document.getElementById("monto");
const cuotasInput = document.getElementById("cuotas");
const interesInput = document.getElementById("interes");
const resultadosalida = document.getElementById("resultado");

function calcularCuotas() {
    const monto = parseFloat(montoInput.value);
    const cuotas = parseInt(cuotasInput.value);
    let interes = parseFloat(interesInput.value);

    if (isNaN(monto) || monto <= 0 || isNaN(cuotas) || cuotas <= 0) {
        resultadosalida.innerText = "Por favor, ingrese valores válidos.";
        return;
    }

    interes = isNaN(interes) ? 0 : interes;

    let resultadoTexto = "";
    let contador = 1;
    let cuotaConInteres = 0;

    do {
        if (interes > 0) {
            cuotaConInteres = (monto * (1 + (interes / 100))) / cuotas;
            resultadoTexto += `Cuota ${contador}: $${cuotaConInteres.toFixed(2)} (con interés del ${interes}%)\n`;
        } else {
            cuotaConInteres = monto / cuotas;
            resultadoTexto += `Cuota ${contador}: $${cuotaConInteres.toFixed(2)}\n`;
        }
        contador++;
    } while (contador <= cuotas);

    resultadosalida.innerText = resultadoTexto;
}
