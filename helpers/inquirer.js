
const inquirer = require("inquirer");
const colors = require("colors");


const inquirerMenu = async() => {
    console.log("==================".blue);
    console.log("Select an option".white);
    console.log("==================".blue);

    const menu = [
        {
            type:"list",
            name:"option",
            message:"What do you want to do?",
            choices:[
                {
                    value: 1,
                    name: `${"1-".blue} Create Task`,
                },
                {
                   value: 2,
                   name: `${"2-".blue} Get Tasks`,
               },
               {
                   value: 3,
                   name: `${"3-".blue} Delete Task`,
               },
               {
                   value: 4,
                   name: `${"4-".blue} Mark as completed task`,
               },
               {
                   value: "x",
                   name: `${"x-".blue} Exit`,
               }
            ],
        }
    ];

    const {option} = await inquirer.prompt(menu);

    return option;
}

const inquirerInput = async(message) => {
    const question = [
        {
            type:"input",
            name:"description",
            message,
        }
    ];

    const {description} = await inquirer.prompt(question) ;
    return description;

}

const inquirerSubMenu = async(choices, action) => {
    console.log("===============================".blue);
    console.log("Select a task".white);
    console.log("===============================".blue);

    const menu1 = [
        {
            type:"list",
            name:"option",
            message:`Select a task to ${action}`,
            choices,
        }
    ];

    const {option} = await inquirer.prompt(menu1) ;
    return option;

}


module.exports = {
    inquirerMenu,
    inquirerInput,
    inquirerSubMenu
}






