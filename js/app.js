"use strict";
const carrito = document.querySelector("#carrito"),
      listaCursos = document.querySelector("#lista-cursos"),
      contenedorCarrito = document.querySelector("#lista-carrito tbody"),
      vaciarCarritoBtn = document.querySelector("#vaciar-carrito");

cargarEventListeners();
function cargarEventListeners() {
    listaCursos.addEventListener("click", agregarCurso);
};

function agregarCurso(e) {
    e.preventDefault(); // Evita regresar a la pantalla superior al clicar
    if ( e.target.classList.contains("agregar-carrito")) {
        const cursoSeleccionado = e.target.parentElement.parentElement; // Toma toda la targeta del producto.
        leerDatosCurso(cursoSeleccionado);
    };
};

function leerDatosCurso(curso) {
    const infoCurso = {
        imagen: curso.querySelector("img").src,
        titulo: curso.querySelector("h4").textContent,
        precio: curso.querySelector("span").textContent
    };
    console.log(infoCurso);
};