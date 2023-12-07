//Funciones auxiliares - utilities

const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelectorAll(selector)


//Funcion ocultar filtros
const hideFilters = (event) => {
    event.preventDefault(); 
    const hiddenFilterType = $("#hidden-filter-type")
    hiddenFilterType.style.display = hiddenFilterType.style.display === "none" ? "block" : "none"
  }

  $("#hideFilters").addEventListener("click", hideFilters)








