//Funciones auxiliares - utilities

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

// ------------------------------------------------------------------

// id dinamico utilities
const idGeneration = () => self.crypto.randomUUID()

// //------------------------------------------------------------------
// //Funcion ocultar filtros -FUNCIONA OK

const hideFilters = (event) => {
    event.preventDefault(); 
    const hiddenFilterType = $("#hidden-filter-type")
    hiddenFilterType.style.display = hiddenFilterType.style.display === "none" ? "block" : "none"
  }

  $("#hideFilters").addEventListener("click", hideFilters)



//-------------------------------------------------------------------------
//NO ME FUNCIONA 
//-----------------

const initializeApp = () =>{
    $("#category-options").addEventListener("click", () => {
        $("#section-balance").classList.add("hidden")
        $("#section-category").classList.remove("hidden")
        
      })
      $("#reports-option").addEventListener("click", () => {
        $("#section-balance").classList.toggle("hidden")
        $("#section-reportes").classList.toggle("hidden")
        
      })

      $(".new-operation-add").addEventListener("click", () => {
        $("#operation-img").classList.toggle("hidden")
        $("#new-operation-appear").classList.toggle("hidden")
        
      })

}


// window.addEventListener("load",initializeApp )

// const dataInput = []

// // Función para renderizar los datos en la tabla
// const renderInput = () => {
 
//     for (const dataInput of dataInputs) {
        
//         $("#table").innerHTML += `
//             <tr>
//                 <td>${dataInput.descripcion}</td>
//                 <td>${dataInput.categoria}</td>
//                 <td>${dataInput.fecha}</td>
//                 <td>${dataInput.monto}</td>
//                 <td>Editar y eliminar btn</td>
//             </tr>
//         `;
//         //agregar los btn de eliminar y editar
//     }
// };

// renderInput();

// const saveData = () =>{
// //guardo el valor de los input
// return {
//         Id: idGeneration(),
//         descripcion: $("#new-operation-description").value,  
//         monto: $("#new-operation-amount").value,
//         tipo: $("#new-operation-type").value,  
//         categoria: $("#new-operation-category").value,  
//         fecha: $("#new-operation-date").value,
// }

// }

//------------------------------------------



