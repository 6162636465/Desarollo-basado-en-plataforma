(function() {
  //Variables
  var lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea = document.getElementById("btn-agregar");

  //Funciones
  var AgregarTarea = function() {
    var tarea = tareaInput.value, //asigno contenido a la variable
      NuevaTarea = document.createElement("li"), //creo un elemento li
      enlace = document.createElement("a"); //creo un elemento a
    contenido = document.createTextNode(tarea); //creo un Nodo que va a contener la tarea

    if (tarea === "") {
      tareaInput.setAttribute("Placeholder", "Agregar una tarea valida");
      tareaInput.className = "error";
      return false;
    }
    enlace.appendChild(contenido); //Agregamos el contenido al enlace
    enlace.setAttribute("href", "#"); // Establecemos un atributo href al contenido
    NuevaTarea.appendChild(enlace); //agregamos el enlace (a) a la nueva tarea (li)
    lista.appendChild(NuevaTarea); //Agregamos la nueva tarea a la lista

    tareaInput.value = ""; // para borrar el valor de agregar tarea una vez agregada

    for (var i = 0; i <= lista.children.length - 1; i++) {
      lista.children[i].addEventListener("click", function() {
        this.parentNode.removeChild(this);
      });
    }
  };
  var comprobarInput = function() {
    tareaInput.className = "";
    teareaInput.setAttribute("placeholder", "Agregar tu tarea");
  };

  var eliminarTarea = function() {
    this.parentNode.removeChild(this);
  };
  //Eventos

  //Agregar Tareas
  btnNuevaTarea.addEventListener("click", AgregarTarea);
  //Comprobar Input
  tareaInput.addEventListener("click", comprobarInput);
  // Borrando Input
  for (var i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener("click", eliminarTarea);
  }
})();
