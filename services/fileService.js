
const TaskRepository = require("../repositories/TaskRepository");
const taskRepository = new TaskRepository();

const getAllTask = () => {

    const tasks = taskRepository.getAllTask();       
    const mapped = tasks.map(e => {
        return {title: e.title, done: e.done}        
    });    
        
    for (let i = 0; i < mapped.length; i++) {
         console.log(`Tarea: ${mapped[i].title} --- Finalizada: ${mapped[i].done}`);        
    }   
    
}

const createTask = (title) => {
    taskRepository.createTask(title);
}

module.exports = {
    getAllTask,
    createTask
}

