
const { inquirerMenu, inquirerInput } = require("./helpers/inquirer");
const {getAllTask, createTask} = require("./services/fileService");

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
                console.log(allTasks);
            
                break;
        }
        
    } while (option !== "x");  


}

main();






