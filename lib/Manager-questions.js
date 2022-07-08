
const generatePage = (manager, employees) => {

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
    ${
    employees.map(employee =>{
        return `
        <h1> ${employee.name} </h1> 
        `
    })
    }

    </body>
    </html>
    `;
}

module.exports = generatePage;






// const inquirer = require('inquirer');
// const Manager = require('./Manager');

// function ManagerPersonnel() {
//     this.manager;
// }

// ManagerPersonnel.prototype.createManager = function(){
//     console.log('hello world');
//     if(this.name){
//         inquirer.prompt({
//         type: 'input',
//         name: 'name',
//         message: 'Please enter your Employees name',
//         })
//         .then(({name}) => {
//             if(name === ''){
//                 getName();
//             }
//             this.manager = new Manager(name);
//         })
//     };
//     // return `
//     // <!DOCTYPE html>
//     // <html lang="en">
//     // <head>
//     //     <meta charset="UTF-8">
//     //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     //     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     //     <title>Employee Directory Manager</title>
//     // </head>
//     // <body>
//     // <h1> ${manager.name}</h1>
//     // </body>
//     // </html>
//     // `;
// };

// module.exports = ManagerPersonnel.createManager;