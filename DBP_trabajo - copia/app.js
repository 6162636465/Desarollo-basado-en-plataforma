document.getElementById('formTask').addEventListener('submit',saveTask);

function saveTask(e){

    let title = document.getElementById('title').value;
    let description = document.getElementById('description').value;

    const task={
        title,  //title:title
        description,  //description:description
    };

    if(localStorage.getItem('tareas')==null){
        let tareas=[];
        tareas.push(task);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }

    else{
        let tareas= JSON.parse(localStorage.getItem('tareas'));
        tareas.push(task);
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }


    getTasks();
    document.getElementById('formTask').reset();
    e.preventDefault();
}

function getTasks() {
    let tareas = JSON.parse(localStorage.getItem('tareas'));
    let tareasView = document.getElementById('tareas');

    tareasView.innerHTML = '';

    for(let i = 0; i < tareas.length; i++) {
      let title = tareas[i].title;
      let description = tareas[i].description;
  
      tareasView.innerHTML += `
      <div class="card mb-3">
          <div class="card-body">
          <i class="fas fa-dragon"></i>
            <p>${title} - ${description}</p>
            <a class="btn btn-danger" onclick="deleteTask('${title}')">
            Eliminar</a>
          </div>
        </div>`;
    }
}

function deleteTask(title){
    let tareas = JSON.parse(localStorage.getItem('tareas'));

    for(let i=0; i<tareas.length; i++){
        if(tareas[i].title == title){
            tareas.splice(i,1);
        }
    }
    localStorage.setItem('tareas', JSON.stringify(tareas));
    getTasks();
}

const list=document.getElementById('tareas');
const tareasPendientes=document.getElementById('tareasPendientes');
const tareasCompletadas=document.getElementById('tareasCompletadas');


Sortable.create(list, {
    group: {
        name: "lista-tarea"
    },
    animation: 150,
    easing: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
    handle: ".fas",
    chosenClass: "active"
});


Sortable.create(tareasPendientes, {
    group: {
        name: "lista-tarea"
    },
    animation: 150,
    easing: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
    handle: ".fas",
    chosenClass: "active"
});

Sortable.create(tareasCompletadas, {
    group: {
        name: "lista-tarea"
    },
    animation: 150,
    easing: "cubic-bezier(0.895, 0.03, 0.685, 0.22)",
    handle: ".fas",
    chosenClass: "active"
});