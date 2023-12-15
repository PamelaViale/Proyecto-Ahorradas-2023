//Utilities

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)

// id dinamico utilities
const idGeneration = () => self.crypto.randomUUID([])

//Inicializo LocalStorage
const getData = (key) => JSON.parse(localStorage.getItem(key))
const setData = (key, data) => localStorage.setItem(key,JSON.stringify(data))
setData("categories", [])

//para ejecutarlo llamo a la funcion y le paso los parametros.

const allDates = getData("input") || []

// // //----------------------------------------------------
// // //Funcion ocultar filtros -FUNCIONA OK


const hideFilters = (event) => {
    event.preventDefault()
    const hiddenFilterType = $("#hidden-filter-type")
    hiddenFilterType.style.display = hiddenFilterType.style.display === "none" ? "block" : "none"
  }

  $("#hideFilters").addEventListener("click", hideFilters)



// //-------------------------------------------------------------------------
// 
// //Events-----------------

const initializeApp = () =>{
    setData("input", allDates)// se ejecuta esta linea y me envia el array vacio al local s
    //si no hay datos me da un array vacío
    renderInput(allDates) || []
    // categoria
    $("#category-options").addEventListener("click", (e) => {
        e.preventDefault()
        $("#section-balance").classList.add("hidden", "lg:hidden")
        $("#section-category").classList.remove("hidden", "lg:hidden")
        $("#section-reportes").classList.add("hidden", "lg:hidden")  
    })
   // reportes
   $("#reports-option").addEventListener("click", (e) => {
    e.preventDefault()
      $("#section-reportes").classList.remove("hidden", "lg:hidden")
      $("#section-balance").classList.add("hidden", "lg:hidden")
      $("#section-category").classList.add("hidden ,lg:hidden")
      
        
      })

      //vuelve a balance 
      $("#balance-options").addEventListener("click", () => {
        $("#section-balance").classList.remove("hidden", "lg:hidden")
        $("#section-reportes").classList.add("hidden", "lg:hidden")
        $("#section-category").classList.add("hidden", "lg:hidden")
        $("#new-operation-appear").classList.add("hidden", "lg:hidden")
        
      })

// nueva operacion

$("#new-operation-add").addEventListener("click", (e) => {
    e.preventDefault()
    $("#section-balance").classList.add("hidden","lg:hidden")
    $("#new-operation-appear").classList.remove("hidden","lg:hidden")

})
$("#new-operation-add-op").addEventListener("click", (e) => {
    e.preventDefault()
    $("#section-balance").classList.add("hidden","lg:hidden")
    $("#new-operation-appear").classList.remove("hidden","lg:hidden")

})

//Que la información de mi nueva operacion se envie luego de hacer click en agregar, se envia a un objeto vacio, pero luego lo pasamos al local storage
// dataInput objeto
$("#new-operation-accept").addEventListener("click", (e) => {
    e.preventDefault()
    const currentdata = getData("input") //pido la info
    currentdata.push(saveData()) //mnodifico
    setData("input",currentdata) //envio la informacion
})

}
window.addEventListener("load",initializeApp)

// // Función para renderizar los datos inputs en la tabla

const renderInput = (input) => {
     for(const dataInput of dataInputs) {
       $("#table-operaciones").innerHTML += `
            <tr>
                <td>${dataInput.descripcion}</td>
                <td>${dataInput.categoria}</td>
                <td>${dataInput.fecha}</td>
                <td>${dataInput.monto}</td>
                <td>
                <button onclick="editOperation('${input.Id}')">Editar</button>
                <button onclick="deleteOperation('${input.Id}')">Eliminar</button>
                </td>
            </tr>
        `
            }
}

renderInput()

// envio la informacion input como un objeto
const saveData = () =>{
//guardo el valor de los input,con input.value
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


