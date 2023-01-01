"use strict";
const carrito = document.querySelector("#carrito"),
      listaCursos = document.querySelector("#lista-cursos"),
      contenedorCarrito = document.querySelector("#lista-carrito tbody"),
      vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

cargarEventListeners();
function cargarEventListeners() {
    listaCursos.addEventListener("click", agregarCurso); // Agrega cursos al carrito.
    carrito.addEventListener("click", eliminarCurso); // Elimina curso del carrito
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
        precio: curso.querySelector(".precio span").textContent,
        id: curso.querySelector("a").getAttribute("data-id"),
        cantidad: 1
    };
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id); // Revisa si un elemente existe en el curso.
    if (existe) {
        const cursos = articulosCarrito.map( curso => {
            if (curso.id == infoCurso.id) {
                curso.cantidad++;
                return curso;
            } else {
                return curso;
            };
        });
        articulosCarrito = [...cursos];
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso]; // Este codigo llevara cada elemento que tomemos a un arreglo.
    };
    carritoHTML();
};

function carritoHTML() {
    // Refrescar el carrito cuando agregamos nuevos elementos, para evitar que se dupliquen.
    limpiarHTML();

    // Agregamos nuevos elementos
    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id} = curso;
        const row = document.createElement("tr");
        row.innerHTML = ` 
            <td>
                <img src="${imagen}" width="100"/>
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}">X</a>
            </td>
        `;
        contenedorCarrito.appendChild(row);
    });
};

function limpiarHTML() {
    // contenedorCarrito.innerHTML = " ";
    while (contenedorCarrito.firstChild) {
        contenedorCarrito.removeChild(contenedorCarrito.firstChild);
    };
};

function eliminarCurso(e) {
    if (e.target.classList.contains("borrar-curso")) {
        const cursoId = e.target.getAttribute("data-id");
        articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);
        carritoHTML();
    }
};