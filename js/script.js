//função que add tarefa

function addTask(){
    //titulo da tarefa
    const taskTitle = document.querySelector('#task-title').value

    if(taskTitle){
        //clona template
        const template = document.querySelector('.template')

        const newTask = template.cloneNode(true)

        //adiciona titulo
        newTask.querySelector('.task-title').textContent = taskTitle

        //remove classes inúteis
        newTask.classList.remove("template")
        newTask.classList.remove("hide")

        //adiciona tarefa na lista

        const list = document.querySelector('#task-list')
        list.appendChild(newTask)

        //adicionar o evento remover
        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click" , function(){ 
            removeTask(this)
        })
        // adicionar evento de completar tarefa
        const doneBtn = newTask.querySelector('.done-btn').addEventListener("click", function(){
            completeTask(this)
        })
        // limpar texto
        document.querySelector('#task-title').value = ""
        
    }
}


// função remover tarefa
function removeTask(task){
        task.parentNode.remove(true)
}

// função completar tarefa
function completeTask(task){
    const taskToComplete = task.parentNode
    //console.log(task)
    taskToComplete.classList.toggle("done")
    //Set Time Out para sumir a tarefa completada
    const myTimeout = setTimeout(myGreeting, 700);
    function myGreeting() {
        task.parentNode.remove(true)
    }
    
}

// evento de adicionar tarefa
const addBtn = document.querySelector("#add-btn")

addBtn.addEventListener("click",function(e){
    e.preventDefault();

    addTask()
})