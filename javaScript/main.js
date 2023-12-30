
// Utilities
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);


// id aleatorio
const idGeneration = () => self.crypto.randomUUID([]);

//local storage obtener y enviar datos
const getData = (key) => JSON.parse(localStorage.getItem(key));
const setData = (key, data) => localStorage.setItem(key, JSON.stringify(data));
setData("categories", []);

//traingo y guardo info del LS o me devielve un array
const allDates = getData("input") || [];

// mostrar elementos dom
const showElement = (selectors) => {
  for (const selector of selectors) {
    $(selector).classList.remove("hidden", "lg:hidden");
  }
};
// esconder elementos dom
const hideElement = (selectors) => {
  for (const selector of selectors) {
    $(selector).classList.add("hidden", "lg:hidden");
  }
};

//esconder input de los filtros OK
const hideFilters = (event) => {
  event.preventDefault();
  const hiddenFilterType = $("#hidden-filter-type");
  hiddenFilterType.style.display =
    hiddenFilterType.style.display === "none" ? "block" : "none";
};

$("#hideFilters").addEventListener("click", hideFilters);

// Events
const initializeApp = () => {
  setData("input", allDates);
  renderInput();
// nav categoria veo categoria ok
  $("#category-options").addEventListener("click", (e) => {
    e.preventDefault();   
    showElement(["#section-category"]);
    hideElement(["#section-balance", "#section-reportes"]);
  });

  //nav reportes veo reportes ok
  $("#reports-option").addEventListener("click", (e) => {
    e.preventDefault();
    showElement(["#section-reportes"]);
    hideElement(["#section-balance", "#section-category"]);
  });

  //nav balance vuelvo a balance principal ok
  $("#balance-options").addEventListener("click", () => {
    showElement(["#section-balance"]);
    hideElement(["#section-reportes", "#section-category", "#new-operation-appear"]);
  });

  // nueva operacion  ok
  $("#new-operation-add-opp").addEventListener("click", (e) => {
    e.preventDefault();
    showElement(["#new-operation-appear"]);
    hideElement(["#section-balance"]);
    
  });
// agregar la nueva op
  $("#new-operation-accept").addEventListener("click", (e) => {
    e.preventDefault();
    const currentData = getData("input") || [];
    currentData.push(saveData());
    setData("input", currentData);
    renderInput();
  });

  // vuelvo  de aceptar en nueva operacion a balance OK
  $("#new-operation-accept").addEventListener("click", (e) => {
    e.preventDefault();
    showElement(["#section-balance"]);
    hideElement(["#new-operation-appear"]);
  });

  //editar la operacion
  $("#edit-operation-btn").addEventListener("click", (e) => {
    e.preventDefault();
    const inputId = $("#edit-operation-btn").getAttribute("data-id");
    const currentData = getData("input") || [];
    const updatedData = currentData.map((input) => (input.Id === inputId ? saveData() : input));
    setData("input", updatedData);
    renderInput();
  });

  window.location.href = "index.html";
};

window.addEventListener("load", initializeApp);

// primer funcion renderizar datos de tabla:

const renderInput = () => {
  const tableBody = $("#table-operaciones tbody");
  const currentData = getData("input") || [];

  tableBody.innerHTML = "";

  currentData.forEach((input) => {
    const row = document.createElement("tr");
    row.innerHTML += `
    <tr>
        <td class="">${input.descripcion}</td>
        <td class="">${input.categoria}</td>
        <td class="">${input.fecha}</td>
        <td class="">${input.monto}</td>
      <th class="bg-white mr-4 mt-12 ml-6 p-6 rounded lg:w-11/12 xl:w-6/12 pl-16 hidden lg:hidden">
        <button class="mb-2 mt-5" onclick="editOperation('${input.Id}')" id="edit-operation-btn">Editar</button>
        <button onclick="deleteOperation('${input.Id}')" id="delete-operation-btn">Eliminar</button>
      </th>
    </tr>
    `;
    
  });
};

renderInput()


//guardo info de formularios en objeto

const saveData = () => {
  return {
    id: idGeneration(),
    descripcion: $("#new-operation-description").value,
    monto: $("#new-operation-amount").value,
    tipo: $("#new-operation-type").value,
    categoria: $("#new-operation-category").value,
    fecha: $("#new-operation-date").value,
  };
};

const showFormEdit = (inputId) => {
  hideElement(["#table-operaciones"]);

  $("#new-operation-accept").setAttribute("data-id", inputId);
  const inputSelected = getData("input").find((input) => input.Id === inputId);

  $("#new-operation-description").value = inputSelected.descripcion;
  $("#new-operation-amount").value = inputSelected.monto;
  $("#new-operation-type").value = inputSelected.tipo;
  $("#new-operation-category").value = inputSelected.categoria;
  $("#new-operation-date").value = inputSelected.fecha;

  showElement(["#form-edit"]);
};