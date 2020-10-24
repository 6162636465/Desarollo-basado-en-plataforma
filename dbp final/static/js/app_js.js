function abrir(){
    document.getElementById("block").style.opacity="1";
    document.getElementById("block").style.visibility="visible";
    document.getElementById("vent").style.transform="translateY(0%)";
}

function cerrar(){
    document.getElementById("vent").style.transform="translateY(-30%)";
    document.getElementById("block").style.opacity="0";
    document.getElementById("block").style.visibility="hidden";
}


document.getElementById('formtask').addEventListener('submit',savetask);

function savetask(data){
    let titu=document.getElementById('titulo').value;
    let descr=document.getElementById('Descripcion').value;

    const task = {
        titu,
        descr
    };

    if(localStorage.getItem('tasks') === null){
        let tasks=[];
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }else{
        let tasks=JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }

    getTask();
    document.getElementById('formtask').reset();
    data.preventDefault();
}

function getTask(){
    let tasks=JSON.parse(localStorage.getItem('tasks'));
    let taview=document.getElementById('tasks');
    taview.innerHTML = '';

    for(let i=0;i<tasks.length;i++){

        let tit= tasks[i].titu;
        let descr=tasks[i].descr;

        taview.innerHTML +=`
            <div class="card" class="card1">
                <div class="card_body" >
                    <p> ${tit} - ${descr}</p>
                    <div class="borrar" onclick="deleteTask('${tit}')">
                        ELIMINAR
                    </div>
                    <div class="configurar" onclick="modificar('${tit}')">
                        modificar
                    </div>
                </div>

        `;
    }
}
//funcion para modificar____________________________________________________


function modificar(title){
  let tasks= JSON.parse(localStorage.getItem('tasks'));
  console.log(tasks);
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].titu === title){
          abrir();
          document.getElementById('ventana').value = "Guardar Cambios";
          document.getElementById('titulo').value = title;
          document.getElementById('Descripcion').value = tasks[i].descr;
          deleteTask(title);
          finded = true;
        }
    }
}


//__________________________________________________________________________
function deleteTask(title){

    let tasks= JSON.parse(localStorage.getItem('tasks'));
    console.log(tasks);
    for(let i=0;i<tasks.length;i++){
        if(tasks[i].titu === title){
            tasks.splice(i,1);
        }
    }
    localStorage.setItem('tasks',JSON.stringify(tasks));
    getTask();
}
getTask();

const list=document.getElementById('tasks');
Sortable.create(list,{
    group:{name:"lista1" },
    animation:150,
    chosenClass: "selec",
    dragClass: "drag"
});

const list2=document.getElementById('tasks2');
Sortable.create(list2,{
    group:{name:"lista1"},
    animation:150,
    chosenClass: "selec",
    dragClass: "drag"
});
const list3=document.getElementById('tasks3');
Sortable.create(list3,{
    group:{name:"lista1"},
    animation:150,
    chosenClass: "selec",
    dragClass: "drag"
});
const list4=document.getElementById('tasks4');
Sortable.create(list4,{
    group:{name:"lista1"},
    animation:150,
    chosenClass: "selec",
    dragClass: "drag"

});

//partes del desarollo
const list5=document.getElementById('tasks5');
Sortable.create(list5,{
    group:{name:"lista1"},
    animation:150,
    chosenClass: "selec",
    dragClass: "drag"
});
const list6=document.getElementById('tasks6');
Sortable.create(list6,{
    group:{name:"lista1"},
    animation:150,
    chosenClass: "selec",
    dragClass: "drag"
});
const list7=document.getElementById('tasks7');
Sortable.create(list7,{
    group:{name:"lista1"},
    animation:150,
    chosenClass: "selec",
    dragClass: "drag"
});
