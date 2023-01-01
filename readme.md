# Guia y documentacion, proyecto Carrito de compras

Este es un pequeño proyecto de creacion de un sistema de compras, tando del HTML como el CSS son una plantilla web, el **app.js** es el archivo importante, donde se encuentra el codigo de ejecucion del proyecto.
El HTML es un sitio estatico con varios cursos, el archivo app.js se encargara de llevar todos los elementos al carrito, sumar el total, quitar todos los elentos.

*Nota*: Este proyecto es meramente didactico, esta centrado en entender los distintos procesos que puede tener un programa "Carrito de compras" y no en la eficiencia de este.

## Variables y ejecucion 

1. **const carrito**: toma un div (lin. 23) que engloba el carrito de compras.
2. **const contenedorCarrito**: toma un tbody (lin. 35) dentro del carrito, donde se mostraran los elementos a medida que se eligan.
3. **const listaCursos**: toma un div (lin. 85) que contiene todos los cards de los cursos.
4. **const vaciarCarritoBtn**: toma un boton (lin. 38) que vaciara todos los elementos del carrito.
5. **const cursoSeleccionado**: selecciona todo el HTML del card que alamcena el curso en el que hemos clikado.
6. **const infoCurso**: toma toda la informacion del curso seleccionado y lo transforma en un objeto.
7. **let articulosCarrito**: Este es un areglo vacio, tomara los articulos que se encuentren en el carrito en el momento en que se agregen.
8. **const row**: crea un *table row* que tomara los datos del objeto y mostrar su contendio en el carrito. 
9. **const { }**: Destructuring del objeto.
10. **const cursoId**: Tome el id del curso que se quiere eliminar el la funcion `eliminarCurso()`

## Funciones y ejecucion

1. **cargarEventListeners()**: esta funcion registra los evenListeners y los relaciona con las funciones de ejecucion.
2. **agregarCurso(e)**: esta funcion agrega los cursos al carrito, para evitar el **Event Bubbling** tiene un evaluador de condicion que ejecuta el codigo unicamente si se clikea el boton.
3. **agregarCurso(e)**: Selecciona el curso en el que clicamos, crea la variable `cursoSeleccionado` y con esta ejecuta la funcion `leerDatosCurso(curso)`.
4. **leerDatosCurso(curso)**: Crea un objeto con todos los datos del curso seleccionado en una variable llamada `infoCurso`. Al final ejecuta la funcion `carritoHTML()`.
5. **carritoHTML()**: Itera sobre todos los elementos para crear el contenido del carrito de compras en la etiqueta `<tbody></tbody>`
6. **limpiarHTML()**: De esta hay dos maneras, una muy sencilla pero con menos rendimieto y un poco mas compleja pero con mas rendimiento.
    * 1ra. Combierte la variable `contenedorCarrito` en un String vacio, limpiando todos los elementos que se encuentran en el carrito. Esto es sumamente sencillo, pero el codigo seguira ejecutandose todo el tiempo, lo que resta rendimiento.
    * 2da. Crea un iterador que elimine elementos del carrito siempre y cuando exista un elemento en este. Como este solo se ejecutara mientras el `contenedorCarrito` tenga elementos, utiliza menos rendimiento.
7. **const existe(=>)**: Esta contiene una Arrow Function que revisa si un elemento existe en un carrito utilizando el metodo `.some` , mediante su id. 
8. **const cursos(=>)**: Esta itera sobre todos los cursos, si se cumple la condicion de que algun elemento existe en lugar de sumarlo al carrito, aumenta su cantidad.
9. **eliminarCurso(e)**: Elimina un curso seleccionado del carrito, realmente lo que hace es utilizar un filtro usando el `data-id` de modo que se reasigne el carrito filtrado (sin el curso que eliminamos) nuevamente al arreglo `articulosCarrito`, luego se llama la funcion que imprime el HTML en pantalla, para que se vean los cambios.