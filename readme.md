# Guia y documentacion, proyecto Carrito de compras

Este es un pequeño proyecto de creacion de un sistema de compras, tando del HTML como el CSS son una plantilla web, el **app.js** es el archivo importante, donde se encuentra el codigo de ejecucion del proyecto.

## Variables y ejecucion 

1. *const carrito*: toma un div (lin. 23) que engloba el carrito de compras.
2. *const contenedorCarrito*: toma un tbody (lin. 35) dentro del carrito, donde iran los elementos a medida que se eligan.
3. *const listaCursos*: toma un div (lin. 85) que contiene todos los cards de los cursos.
4. *const vaciarCarritoBtn*: toma un boton (lin. 38) que vaciara todos los elementos del carrito.
5. *const cursoSeleccionado*: selecciona todo el HTML del card que alamcena el curso en el que hemos clikado.
6. *const infoCurso*: toma toda la informacion del curso y lo transforma en un objeto.

## Funciones y ejecucion

1. *cargarEventListeners()*: esta funcion registra los evenListeners y los relaciona con las funciones de ejecucion.
2. *agregarCurso(e)*: esta funcion agrega los cursos al carrito, para evitar el **Event Bubbling** tiene un evaluador de condicion que ejecuta el codigo unicamente si se clikea el boton.
3. *agregarCurso(e)*: Selecciona el curso en el que clicamos, crea la variable ´cursoSeleccionado´ y con esta ejecuta la funcion ´leerDatosCurso(curso)´.
4. *leerDatosCurso(curso)*: Crea un objeto con todos los datos del curso seleccionado en una variable llamada ´infoCurso´.