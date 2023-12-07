const $ = (selector) => document.querySelector(selector)
const $$ = (selector) => document.querySelector(selector)


//Ocultar filtros 

$("#hideFilters").addEventListener("click", (e)=>{
    e.preventDefault()
    $("#hidden-filter-type").style.display = $("#hidden-filter-type").style.display === "none" ? "block" : "none" 

})