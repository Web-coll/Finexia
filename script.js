/**
 * Formatea un número como moneda (USD)
 */
function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
}

/**
 * Cálculo de Interés Simple
 */
function calcularInteres() {
    const p = parseFloat(document.getElementById('principal').value);
    const r = parseFloat(document.getElementById('rate').value);
    const t = parseFloat(document.getElementById('time').value);

    const resultadoDiv = document.getElementById('resultadoInteres');
    const valorInteres = document.getElementById('valorInteres');
    const totalInteres = document.getElementById('totalInteres');

    if (isNaN(p) || isNaN(r) || isNaN(t) || p <= 0 || r < 0 || t <= 0) {
        alert("Por favor, ingrese valores válidos y positivos.");
        return;
    }

    // Fórmula: I = P * (r/100) * t
    const interes = p * (r / 100) * t;
    const total = p + interes;

    valorInteres.innerText = formatCurrency(interes);
    totalInteres.innerText = formatCurrency(total);
    
    resultadoDiv.classList.remove('hidden');
    resultadoDiv.classList.add('animate-fade-in');
}

/**
 * Cálculo de Depreciación (Línea Recta)
 */
function calcularDepreciacion() {
    const cost = parseFloat(document.getElementById('cost').value);
    const salvage = parseFloat(document.getElementById('salvage').value);
    const life = parseFloat(document.getElementById('life').value);

    const resultadoDiv = document.getElementById('resultadoDepreciacion');
    const valorDepreciacion = document.getElementById('valorDepreciacion');
    const mensualDepreciacion = document.getElementById('mensualDepreciacion');

    if (isNaN(cost) || isNaN(salvage) || isNaN(life) || cost <= 0 || salvage < 0 || life <= 0) {
        alert("Por favor, ingrese valores válidos y positivos.");
        return;
    }

    if (salvage >= cost) {
        alert("El valor de salvamento no puede ser mayor o igual al costo del activo.");
        return;
    }

    // Fórmula: (Costo - Salvamento) / Vida Útil
    const depreciacionAnual = (cost - salvage) / life;
    const depreciacionMensual = depreciacionAnual / 12;

    valorDepreciacion.innerText = formatCurrency(depreciacionAnual);
    mensualDepreciacion.innerText = formatCurrency(depreciacionMensual);

    resultadoDiv.classList.remove('hidden');
    resultadoDiv.classList.add('animate-fade-in');
}
