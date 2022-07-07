const inquirer = require('inquirer');
const Manager = require('./Manager');

function ManagerPersonnel() {
    this.manager;
}

ManagerPersonnel.prototype.createManager = function(){

    if(this.name){
        inquirer.prompt({
        type: 'input',
        name: 'name',
        message: 'Please enter your Employees name',
        })
        .then(({name}) => {
            if(name === ''){
                getName();
            }
            this.manager = new Manager(name);
        })
    };
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Employee Directory Manager</title>
    </head>
    <body>
    <h1> ${manager.name}</h1>
    </body>
    </html>
    `;
};

module.exports = ManagerPersonnel;