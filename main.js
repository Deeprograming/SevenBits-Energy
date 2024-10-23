const inicio=document.getElementById("inicioaño")

const añoinicial=2024;
const añofinal=1900;

for (year=añoinicial;year>=añofinal;year--){
    let opciona=document.createElement("option");
    opciona.value=year;
    opciona.textContent=year;
    inicio.appendChild(opciona);
}

const paises = ["Argentina", "Australia", "Austria", "Bélgica", "Brasil", "Canadá", "Chile", "China", "Colombia", "Corea del Sur", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "España", "Estados Unidos", "Etiopía", "Filipinas", "Finlandia", "Francia", "Grecia", "Guatemala", "Honduras", "India", "Indonesia", "Irak", "Irlanda", "Israel", "Italia", "Japón", "Kenia", "Líbano", "Malasia", "Marruecos", "México", "Nigeria", "Noruega", "Nueva Zelanda", "Países Bajos", "Panamá", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "Rusia", "Sudáfrica"];


const paisSelect=document.getElementById("pais");


for(let listapais of paises){
    let opcionp=document.createElement("option");
    opcionp.value=listapais;
    opcionp.textContent=listapais;
    paisSelect.appendChild(opcionp);
}


