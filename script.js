function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Agregar evento al botón de búsqueda
document.querySelector('.search-container button').addEventListener('click', function() {
    const query = document.querySelector('.search-container input').value.toLowerCase();
    // Aquí implementarás la lógica para buscar palabras clave en tu contenido.
    console.log('Buscando:', query); // Esto es solo un placeholder para que veas que está funcionando.
});


document.getElementById('enviar-btn').addEventListener('click', function() {
    const pais = document.getElementById('pais').value;
    const energia = document.getElementById('energia').value;
    const anio = document.getElementById('anio').value;

    if (pais && energia && anio) {
        document.getElementById('pais-seleccionado').textContent = pais;
        document.getElementById('energia-generada').textContent = energia; // Aquí deberías calcular o extraer el valor real
        document.getElementById('anio-seleccionado').textContent = anio;
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});
// Rellenar el dropdown de años
const inicioAnio = document.getElementById("anio");

const anioInicial = 2024;
const anioFinal = 1900;

for (let year = anioInicial; year >= anioFinal; year--) {
    let opcionAnio = document.createElement("option");
    opcionAnio.value = year;
    opcionAnio.textContent = year;
    inicioAnio.appendChild(opcionAnio);
}

// Rellenar el dropdown de países
const paises = ["Argentina", "Australia", "Austria", "Bélgica", "Brasil", "Canadá", "Chile", "China", "Colombia", "Corea del Sur", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "España", "Estados Unidos", "Etiopía", "Filipinas", "Finlandia", "Francia", "Grecia", "Guatemala", "Honduras", "India", "Indonesia", "Irak", "Irlanda", "Israel", "Italia", "Japón", "Kenia", "Líbano", "Malasia", "Marruecos", "México", "Nigeria", "Noruega", "Nueva Zelanda", "Países Bajos", "Panamá", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "Rusia", "Sudáfrica"];

const paisSelect = document.getElementById("pais");

paises.forEach(pais => {
    let opcionPais = document.createElement("option");
    opcionPais.value = pais;
    opcionPais.textContent = pais;
    paisSelect.appendChild(opcionPais);
});

// Rellenar el dropdown de tipos de energía
const tiposEnergia = ["Solar", "Eólica", "Biomasa", "Geotérmica", "Hidroeléctrica"];
const energiaSelect = document.getElementById("energia");

tiposEnergia.forEach(energia => {
    let opcionEnergia = document.createElement("option");
    opcionEnergia.value = energia;
    opcionEnergia.textContent = energia;
    energiaSelect.appendChild(opcionEnergia);
})


//INICIO

// Datos para los gráficos
const productionData = {
    labels: ['Hidroeléctrica', 'Eólica', 'Solar', 'Biomasa', 'Nuclear'],
    datasets: [{
        label: 'Producción (GWh)',
        data: [500000, 300000, 200000, 100000, 150000],
        backgroundColor: ['#3498db', '#2ecc71', '#e67e22', '#9b59b6', '#e74c3c'],
    }]
};

const consumptionData = {
    labels: ['Estados Unidos', 'China', 'India', 'Alemania', 'Francia'],
    datasets: [{
        label: 'Consumo (GWh)',
        data: [400000, 600000, 200000, 100000, 110000],
        backgroundColor: ['#1abc9c', '#f1c40f', '#e74c3c', '#3498db', '#9b59b6'],
    }]
};

// Gráfico de Producción
const ctxProduction = document.getElementById('energyProductionChart').getContext('2d');
const energyProductionChart = new Chart(ctxProduction, {
    type: 'bar',
    data: productionData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'GWh'
                }
            }
        }
    }
});

// Gráfico de Consumo
const ctxConsumption = document.getElementById('energyConsumptionChart').getContext('2d');
const energyConsumptionChart = new Chart(ctxConsumption, {
    type: 'bar',
    data: consumptionData,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                title: {
                    display: true,
                    text: 'GWh'
                }
            }
        }
    }
});
