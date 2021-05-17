
const Task = require("../models/Task");
const {getData, saveData} = require("../helpers/fileManager");
const getTodayDate = require("../helpers/dateFormat");


class TaskRepository {

    _tasks = null;

    constructor(){
        const data = getData();
        if(data){
            this._tasks = data;
        }else{
            this._tasks = [];
        }
        
    }

    getAllTask(){
        
        //console.log(this._tasks)
        return this._tasks;

    }


    /**
     * 
     * @param {String} task
     * 
     * TODO: Nos falta persistir datos en archivo
     *       
     */

    createTask(title){
        const task = new Task(title);
        this._tasks.push(task);        
        saveData(this._tasks);
    }
    
    deleteTask(id){        

        this._tasks = this._tasks.filter((el)=> el.id != id);
        saveData(this._tasks);    
    }    

    completeTask(id) {
        this._tasks.map((task) => {
          if (task.id === id) {
            task.done = true;
            task.finished = getTodayDate();
          }
        });
        saveData(this._tasks);
      }

    getTaskIndex(title){        

    }

}


module.exports = TaskRepository;


