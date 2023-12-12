//Funciones auxiliares - utilities

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

// //------------------------------------------------------------------
// //Funcion ocultar filtros - OK
const hideFilters = (event) => {
    event.preventDefault(); 
    const hiddenFilterType = $("#hidden-filter-type")
    hiddenFilterType.style.display = hiddenFilterType.style.display === "none" ? "block" : "none"
  }

  $("#hideFilters").addEventListener("click", hideFilters)



//-------------------------------------------------------------------------


// Datos de ejemplo
const infoInput = [
    {
        Id: 1,
        descripcion: 'Sueldo',  // Añadí comillas simples para que 'Sueldo' sea una cadena de texto
        monto: 200,
        tipo: 'ganancia',  // Añadí comillas simples para que 'ganancia' sea una cadena de texto
        categoria: 'trabajo',  // Añadí comillas simples para que 'trabajo' sea una cadena de texto
        fecha: '11/12/2023',  // Añadí comillas simples para que '11/12/2023' sea una cadena de texto
    },
    {
        Id: 2,
        descripcion: 'almuerzo',  // Añadí comillas simples para que 'almuerzo' sea una cadena de texto
        monto: 200,
        tipo: 'gasto',  // Añadí comillas simples para que 'gasto' sea una cadena de texto
        categoria: 'comida',  // Añadí comillas simples para que 'comida' sea una cadena de texto
        fecha: '11/12/2023',  // Añadí comillas simples para que '11/12/2023' sea una cadena de texto
    },
];


// Función para renderizar los datos en la tabla
const renderInput = (dataInputs) => {
    // Itero sobre los datos de entrada y agrego filas a la tabla
    for (const dataInput of dataInputs) {
        // Corregí los nombres de las propiedades para que coincidan con los datos de entrada
        $("#table").innerHTML += `
            <tr>
                <td>${dataInput.descripcion}</td>
                <td>${dataInput.categoria}</td>
                <td>${dataInput.fecha}</td>
                <td>${dataInput.monto}</td>
                <td>Editar y eliminar btn</td>
            </tr>
        `;
        // agregar los btn de eliminar y editar
    }
};


renderInput(infoInput);

//------------------------------------------

//Funcion para cambiar de pantalla de la img de operaciones al cuadro:
//PREGUNTAR


$("#new-operation-accept").addEventListener("click", () => {
    $("#operation-add").classList.remove("hidden")
    $("#operation-img").classList.add("hidden")
  })
















