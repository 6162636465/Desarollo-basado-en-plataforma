document.getElementById('formtask').addEventListener('submit',savetask);

function savetask(data){
    let titu=document.getElementById('titulo').value;
    let descr=document.getElementById('Descripcion').value;

    const task = {
        titu,
        descr
    };

    if(localStorage.getItem('tasks') === null){
        let tasks=[];//array
        var element =titu;//elemento

        var idx = tasks.indexOf(element);
        while (idx != -1)
         {
          idx = array.indexOf(element, idx + 1);
        }
        if(idx<=2)
        {
          let tasks=[];
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
        }
        else {
          let tasks=JSON.parse(localStorage.getItem('tasks'));
          tasks.push(task);
          localStorage.setItem('tasks',JSON.stringify(tasks));
        }

    }else{
        let tasks=JSON.parse(localStorage.getItem('tasks'));
        tasks.push(task);
        localStorage.setItem('tasks',JSON.stringify(tasks));
    }

    getTask();
    data.preventDefault();
}

function abrir(){
    //document.getElementById("vent").style.display="block";
    document.getElementById("vent").style.transform="translate(-50%,-50%)";
}

function cerrar(){
    //document.getElementById("vent").style.display="none";
    document.getElementById("vent").style.transform="translate(-50%,-400%)";
}

function getTask(){
    let tasks=JSON.parse(localStorage.getItem('tasks'));
    let taview=document.getElementById('tasks');
    taview.innerHTML = '';

    for(let i=0;i<tasks.length;i++){

        let tit= tasks[i].titu;
        let descr=tasks[i].descr;

        taview.innerHTML +=`
            <div class="card">
                <div class="card_body" >
                    <p> ${tit} - ${descr}</p>
                </div>
            </div>
        `;
    }
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
});
