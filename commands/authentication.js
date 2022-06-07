const inquirer = require('inquirer');
const chalk = require('chalk');
const login = async () => await inquirer.prompt([
    {
        "name": "username",
        "type": "input",
        "message": "Enter your username: ",
        "validate": function (value) {
            if(value.length){
                return true;
            }else{
                return "You didn't type your username"
            }
        }
    },
    {
        "name": "password",
        "type": "password",
        "message": "enter your password: ",
        
    }
]).then((answers) => {
    console.log(
        chalk.green("Succesfully logged!")
    )
})
module.exports = login;