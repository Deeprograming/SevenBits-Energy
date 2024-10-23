// *************PÁGINA DE ENERGÍA RENOVABLE.*****************

// Esta función corresponde al scroll, tiene como objetivo subir rápidamente al tope de la página.
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// Esta función se ejecuta cada vez que se presiona el botón de búsqueda.
document.querySelector('.search-container button').addEventListener('click', function() {
    const query = document.querySelector('.search-container input').value.toLowerCase().trim();

    // Ignorar caracteres especiales y números, y palabras de un solo dígito
    if (query.length < 2 || /\d/.test(query) || /[^a-zA-Záéíóúñü]/.test(query)) {
        alert('Por favor, ingresa al menos dos letras.');
        return;
    }

    // Redirigir a la página de resultados
    window.location.href = `resultados.html?query=${encodeURIComponent(query)}`;
});


// Mostrar resultados al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const query = getQueryParam('query');
    const content = [
        { text: "Las energías renovables son una fuente importante para el futuro.", url: "pagina_energia_renovable.html" },
        { text: "La energía solar y eólica son dos de las más utilizadas.", url: "pagina_solar_eolica.html" }
    ];
    const resultsDiv = document.getElementById('results');

    // Filtrar y mostrar resultados
    content.forEach(item => {
        if (item.text.toLowerCase().includes(query)) {
            const highlightedText = highlightText(item.text, query);
            const p = document.createElement('p');
            const link = document.createElement('a');
            link.href = item.url; // Enlazar a la URL correspondiente
            link.innerHTML = highlightedText; // Insertar texto resaltado
            link.target = "_blank"; // Abrir en una nueva pestaña (opcional)
            p.appendChild(link); // Añadir el enlace al párrafo
            resultsDiv.appendChild(p);
        }
    });

    if (resultsDiv.children.length === 0) {
        resultsDiv.innerHTML = '<p>No se encontraron resultados.</p>';
    }
});



// Esta función se llama cuando se envía el formulario.
document.getElementById('enviar-btn').addEventListener('click', function() {
    const pais = document.getElementById('pais').value;
    const energia = document.getElementById('energia').value;
    const anio = document.getElementById('anio').value;

    // Validación de campos
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
});

// *************PÁGINA DE PAÍSES Y REGIONES.*****************

// Esta función se ejecuta cuando se selecciona un CONTINENTE en el filtro.
function filterData(continent) {
    const year = document.getElementById(`year-${continent}`).value;
    const country = document.getElementById(`country-${continent}`).value;
    const energy = document.getElementById(`energy-${continent}`).value;

    const table = document.getElementById(`${continent}-data`);
    const rows = table.getElementsByTagName("tr");

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const countryCell = row.cells[0].innerText;
        const energyCell = row.cells[1].innerText;

        const matchesYear = year === "" || year === row.cells[2].innerText; // Ajusta según tu tabla
        const matchesCountry = country === "" || countryCell.includes(country);
        const matchesEnergy = energy === "" || energyCell.includes(energy);

        if (matchesYear && matchesCountry && matchesEnergy) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
}


 // Mostrar los totales en la última fila
document.getElementById(`total-production-${continent}`).innerText = totalProduction;
document.getElementById(`total-consumption-${continent}`).innerText = totalConsumption;