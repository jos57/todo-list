const divCount = document.getElementById("divCount");  //capturar div donde insertar contador de tareas realizadas.
const App= document.getElementById("App"); //div donde se insertará el nuevo elemento.
let count = 0;

//clase para cada nueva tarea.
class Task{
    constructor(description, priority){
        this.description= description;
        this.priority= priority;
        
    }
};


//clase interface para mostrar elementos en pantalla.
class Ui{
    createTask(task){
        const newElement= document.createElement("div"); //creación de nuevo elemento.
        newElement.innerHTML= `<div class=" col-8 card bg-dark text-light ml-3 my-1">
            <div class="card-body row">
                <strong class="h4 col-4">Task: ${ task.description }</strong>
                <strong class=" h4 col-5">Priority: ${ task.priority }</strong>
                <button class="btn btn-success btn-md col-3">Done</button>
            </div>
        </div>`;
        App.appendChild(newElement);
    }

    deleteTask(element){
        element.remove();
        count ++;
        divCount.innerHTML = `<h4 class="text-success">${ count }</h4>`
    }
};

//captura del evento.
let newTask= document.getElementById("newTask");  //input de ingreso de nueva tarea.
let buttonCreateTask= document.getElementById("create"); //boton para crear nueva tarea.

//escuchador de evento click para el boton "create".
buttonCreateTask.addEventListener("click", (event)=>{
    let newTaskValue= newTask.value; //valor del input de nueva tarea.
    event.preventDefault(); //evitar envio del formulario y refresco de página.
    let radio= document.getElementsByName("Priority"); //captura de los radio button.
    let radioButton;
    for(let i=0; i<radio.length;i++){
        if(radio[i].checked){
            radioButton= radio[i].id;
        }
    }

    const task= new Task(newTaskValue, radioButton); //instancia de la clase Task.

    const ui= new Ui(); //instancia de la clase ui.
    ui.createTask(task);
    let form= document.getElementById("form"); //captura de formulario.
    form.reset(); //reseteo de los campos rellenados en los inputs.
})

//fecha para la interface.
let dia= document.getElementById("dia");
let currentHours = document.getElementById("currentHours");
setInterval(function(){
    const dias=[ "Sunday", "Monday", "Tuesday", "Wednesday","Thursday","Friday", "Saturday" ];
    const date= new Date();
    let d= dias[date.getDay()];
    let h= date.getHours();
    let m= date.getMinutes();
    let s= date.getSeconds();
    let f = date.getDate();
    let mes = date.getMonth() + 1;
    let year = date.getFullYear();
     dia.innerHTML=`${ d } <br> ${ f } / ${ mes } / ${ year }`;
    
     currentHours.innerHTML = `<h2 class="text-light">${ h<=9?"0"+h:h }:${ m<=9?"0"+m:m }:${ s }</h2>`

},1000);

//evento click sobre div App.
App.addEventListener('click',(event)=>{
   const ui = new Ui();
   ui.deleteTask(event.target.parentElement.parentElement);
  
});






