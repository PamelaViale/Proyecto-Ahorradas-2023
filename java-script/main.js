//Funciones auxiliares - utilities

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

// ------------------------------------------------------------------


// id dinamico utilities
const idGeneration = () => self.crypto.randomUUID()

// //------------------------------------------------------------------
// //Funcion ocultar filtros - OK
const hideFilters = (event) => {
    event.preventDefault(); 
    const hiddenFilterType = $("#hidden-filter-type")
    hiddenFilterType.style.display = hiddenFilterType.style.display === "none" ? "block" : "none"
  }

  $("#hideFilters").addEventListener("click", hideFilters)



//-------------------------------------------------------------------------

const dataInput = []

// Función para renderizar los datos en la tabla
const renderInput = () => {
 
    for (const dataInput of dataInputs) {
        
        $("#table").innerHTML += `
            <tr>
                <td>${dataInput.descripcion}</td>
                <td>${dataInput.categoria}</td>
                <td>${dataInput.fecha}</td>
                <td>${dataInput.monto}</td>
                <td>Editar y eliminar btn</td>
            </tr>
        `;
        //agregar los btn de eliminar y editar
    }
};


renderInput();




const saveData = () =>{
//guardo el valor de los input
return {
        Id: idGeneration(),
        descripcion: $("#new-operation-description").value,  
        monto: $("#new-operation-amount").value,
        tipo: $("#new-operation-type").value,  
        categoria: $("#new-operation-category").value,  
        fecha: $("#new-operation-date").value,
}

}

//------------------------------------------

//Funcion para cambiar de pantalla de la img de operaciones al cuadro:
//PREGUNTAR

// const initializeApp = () =>{
//     $("#new-operation-accept").addEventListener("click", () => {
    
//         $("#operation-add").classList.remove("hidden")
//         $("#operation-img").classList.add("hidden")
//       })

// }


// window.addEventListener("load",initializeApp )














