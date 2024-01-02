
// Utilities
const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)


// id aleatorio
const idGeneration = () => self.crypto.randomUUID([])

//local storage obtener y enviar datos
const getData = (key) => JSON.parse(localStorage.getItem(key))
const setData = (key, data) => localStorage.setItem(key, JSON.stringify(data))
setData("categories", [])

//traingo y guardo info del LS o me devielve un array
const allDates = getData("input") || []

// mostrar elementos dom
const showElement = (selectors) => {
  for (const selector of selectors) {
    $(selector).classList.remove("hidden", "lg:hidden")
  }
}
// esconder elementos dom
const hideElement = (selectors) => {
  for (const selector of selectors) {
    $(selector).classList.add("hidden", "lg:hidden")
  }
}

//esconder input de los filtros OK
const hideFilters = (event) => {
  event.preventDefault()
  const hiddenFilterType = $("#hidden-filter-type")
  hiddenFilterType.style.display =
    hiddenFilterType.style.display === "none" ? "block" : "none"
}

$("#hideFilters").addEventListener("click", hideFilters)

// Events
const initializeApp = () => {
  setData("input", allDates)
  renderInput()
// nav categoria veo categoria ok
  $("#category-options").addEventListener("click", (e) => {
    e.preventDefault()
    showElement(["#section-category"])
    hideElement(["#section-balance", "#section-reportes"])
  })

  //nav reportes veo reportes ok
  $("#reports-option").addEventListener("click", (e) => {
    e.preventDefault()
    showElement(["#section-reportes"])
    hideElement(["#section-balance", "#section-category"])
  })

  //nav balance vuelvo a balance principal ok
  $("#balance-options").addEventListener("click", () => {
    showElement(["#section-balance"])
    hideElement(["#section-reportes", "#section-category", "#new-operation-appear"])
  })

  // nueva operacion  ok
  $("#new-operation-add-opp").addEventListener("click", (e) => {
    e.preventDefault();
    showElement(["#new-operation-appear"])
    hideElement(["#section-balance"])
    
  })
// agregar la nueva op
  $("#new-operation-accept").addEventListener("click", (e) => {
    e.preventDefault()
    const currentData = getData("input") || []
    currentData.push(saveData())
    setData("input", currentData)
    renderInput()
  });

  // vuelvo  de aceptar en nueva operacion a balance OK
  $("#new-operation-accept").addEventListener("click", (e) => {
    e.preventDefault()
    showElement(["#section-balance"])
    hideElement(["#new-operation-appear"])
  })

  //editar la operacion
  $("#new-operation-edit").addEventListener("click", (e) => {
    e.preventDefault()
    const inputId = $("#new-operation-edit").getAttribute("data-id");
    const currentData = getData("input") || []
    const updatedData = currentData.map((input) => (input.Id === inputId ? saveData() : input))
    setData("input", updatedData)
    renderInput()
  });

   // nuevo evento para el botón de cancelar nueva operación
   $("#new-operation-cancel").addEventListener("click", (e) => {
    e.preventDefault();
    showElement(["#section-balance"])
    hideElement(["#new-operation-appear"])
  })


  $("#edit-operation-btn").addEventListener("click", (e) => {
    e.preventDefault();
    showElement(["#new-operation-appear","#edit-op", "#new-operation-edit"])
    hideElement(["#section-balance","#new-operation-title", "#new-operation-accept"])
    
  
  })

}

window.addEventListener("load", initializeApp)

// funcion renderizar datos de tabla:

const renderInput = () => {
  const tableBody = $("#table-operaciones tbody")
  const currentData = getData("input") || []

  tableBody.innerHTML = ""

  console.log("Current Data:", currentData)

  currentData.forEach((input) => {
    console.log("Input:", input)
    const row = document.createElement("tr")
    row.id = `row-${input.Id}` // identidicador para bnt eliminar linea table
    row.innerHTML += `
      <td class="text-center">${input.descripcion}</td>
      <td class="text-center">${input.categoria}</td>
      <td class="text-center">${input.fecha}</td>
      <td class="text-center">${input.monto}</td>
      <th class="text-teal-400 text-center">
        <button class="mb-2" onclick="editOperation('${input.Id}')" id="edit-operation-btn">Editar</button>
        <button onclick="deleteOperation('${input.Id}')" id="delete-operation-btn">Eliminar</button>
      </th>
    `;

    tableBody.appendChild(row)
  })
};

renderInput();

// Función para eliminar operación
const deleteOperation = (inputId) => {
  const currentData = getData("input") || []

  // Encuentra el índice de la operación a eliminar
  const indexToDelete = currentData.findIndex((input) => input.Id === inputId)

  // Elimina la operación de la matriz de datos
  currentData.splice(indexToDelete, 1)

  // Actualiza los datos en el almacenamiento local
  setData("input", currentData)

  // Elimina la fila correspondiente de la tabla por su identificador único
  const rowToDelete = $(`#row-${inputId}`)
  if (rowToDelete) {
    rowToDelete.remove()
  }
}; 

// Define la función editOperation para editar texto de tabla de operaciones
const editOperation = (inputId) => {
  // Obtiene los datos actuales del almacenamiento local
  const currentData = getData("input") || []

  // Encuentra la operación que deseas editar según el ID
  const operationToEdit = currentData.find((input) => input.id === inputId)

  // Verifica si se encontró la operación
  if (operationToEdit) {
    // Rellena los campos del formulario con los datos de la operación actual
    $("#new-operation-description-op").value = operationToEdit.descripcion
    $("#new-operation-amount").value = operationToEdit.monto
    $("#new-operation-type").value = operationToEdit.tipo
    $("#new-operation-category").value = operationToEdit.categoria
    $("#new-operation-date").value = operationToEdit.fecha

    // Cambia el texto del botón de agregar a editar
    $("#new-operation-edit").textContent = "Editar"
    
    // Almacena el ID (new-operation-accept) de la operación que se está editando en un atributo personalizado del botón de aceptar
    $("#new-operation-edit").setAttribute("data-id", inputId)

    // Muestra el formulario de edición y oculta otros elementos según sea necesario
    showElement(["#new-operation-appear", "#edit-op", "#new-operation-edit"])
    hideElement(["#section-balance"])
  } else {
    console.error("Operación no encontrada para editar.")
  }
}

// ESTOY ACA ARRIBA



//guardo info de formularios en objeto

const saveData = () => {
  return {
    id: idGeneration(),
    descripcion: $("#new-operation-description-op").value,
    monto: $("#new-operation-amount").value,
    tipo: $("#new-operation-type").value,
    categoria: $("#new-operation-category").value,
    fecha: $("#new-operation-date").value,
  }
}









