
const TaskRepository = require("../repositories/TaskRepository");
const taskRepository = new TaskRepository();

const getAllTask = () => {

    const tasks = taskRepository.getAllTask();       
    const mapped = tasks.map(e => {
        return {title: e.title, done: e.done}        
    });              

    mapped.forEach( (el) => {
        console.log(`Tarea: ${el.title} --- Finalizada: ${el.done}`)
    });
    
}

const createTask = (title) => {
    taskRepository.createTask(title);
}

const getChoices = ()=>{
    const choices = taskRepository.getAllTask()
    const lista = choices.map((el)=>{
        return { value: el.id, name: el.title, done: el.done };
    });
    //console.log(lista)
    return lista;
}

const getChoices2 = ()=>{
    const choices = taskRepository.getAllTask(); 
    //console.log(choices.length);   
    const lista = choices.map((el)=>{
        return { value: el.id, name: el.title, done: el.done };
    });
    const lista2 = lista.filter((el)=> el.done == false);
    //console.log(lista);
        
    return lista2;
}

const deleteTask = (id) => {
    taskRepository.deleteTask(id);
};

const completeTask = (id) =>{
    taskRepository.completeTask(id);
} 

module.exports = {
    getAllTask,
    createTask,
    getChoices,
    deleteTask,
    completeTask,
    getChoices2
}

