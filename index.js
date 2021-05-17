
const { inquirerMenu, inquirerInput, inquirerSubMenu } = require("./helpers/inquirer");
const {getAllTask, createTask, getChoices, deleteTask, completeTask, getChoices2} = require("./services/fileService");
const TaskRepository= require("./repositories/TaskRepository");
const Repository = new TaskRepository();

const main = async()=>{    
    
    let option= "";

    do {
        option = await inquirerMenu();
    
        switch (option) {
            case 1:                        
                const title = await inquirerInput("Task Title");
                createTask(title);      
                          
                break;
    
            case 2:
                const allTasks = getAllTask();            
            
                break;
            
            case 3:
                const choices = getChoices();         
                //console.log(choices)       
                if (choices.length > 0) {
                    const task = await inquirerSubMenu(choices, "delete");
                    //console.log(task)
                    deleteTask(task);
                } else {
                    console.log("There are no tasks to delete!".red);
                }
                
                break;

            case 4:
                const choices1 = getChoices2();
                if (choices1.length > 0) {
                    const task = await inquirerSubMenu(choices1, "mark as completed");                    
                    completeTask(task);
                } else {
                    console.log("There are no tasks to complete!".rainbow);
                }

        }
        
    } while (option !== "x");  

}

main();






