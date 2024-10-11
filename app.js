// 1. Seleccionamos los elementos del DOM que vamos a manipular
let inputTarea = document.getElementById("nuevaTarea");
let botonAgregar = document.getElementById("agregarTarea");
let listaTareas = document.getElementById("listaTareas");

// 2. Función para agregar una tarea
botonAgregar.addEventListener("click", function() {
    let tareaTexto = inputTarea.value;
    
    // Solo agrega la tarea si el input no está vacío
    if (tareaTexto !== "") {
        let nuevaTarea = document.createElement("li");
        nuevaTarea.innerText = tareaTexto;
        
        // 3. Botón para eliminar la tarea
        let botonEliminar = document.createElement("button");
        botonEliminar.innerText = "Eliminar";
        botonEliminar.addEventListener("click", function() {
            listaTareas.removeChild(nuevaTarea);
        });

        // 4. Marcar como completada al hacer click en la tarea
        nuevaTarea.addEventListener("click", function() {
            nuevaTarea.style.textDecoration = "line-through"; // Marcar como completada
        });

        // Agregar el botón de eliminar y la tarea a la lista
        nuevaTarea.appendChild(botonEliminar);
        listaTareas.appendChild(nuevaTarea);
        
        // Limpiar el input después de agregar la tarea
        inputTarea.value = "";
    }
});
