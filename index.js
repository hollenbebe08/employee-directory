const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./lib/Manager-questions');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

let manager;
let employees = [];


const promptManager = () =>{
    return inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your Managers name',
        validate: function(nameInput){
            if(nameInput){
                return true;
            } else{
                console.log('Please enter your Managers name');
                return false;
            } 
        }
    },

    {
        type: 'input',
        name: 'id',
        message: 'Please enter your Managers id',
        validate: function(idInput){
            if(idInput){
                return true;
            } else{
                console.log('Please enter your Managers id');
                return false;
            } 
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your Managers email',
        validate: function(emailInput){
            if(emailInput){
                return true;
            } else{
                console.log('Please enter your Managers email');
                return false;
            } 
        }
    },
    {
        type: 'input',
        name: 'office',
        message: 'Please enter your Managers office number',
        validate: function(officeNumberInput){
            if(officeNumberInput){
                return true;
            } else{
                console.log('Please enter your Managers office number');
                return false;
            } 
        }
    },
    ]);
};

const promptEmployee = () =>{
    return inquirer
    .prompt([
    {
        type: 'confirm',
        name: 'confirmAddEmployee',
        message: 'Would you like to add another team member?',
        default: false
    },
    {
        type: 'list',
        name: 'employeeType',
        message: 'Would you like to add an Engineer or Interns information?',
        choices: ['Engineer', 'Intern'],
        validate: addEmployeeInput => {
            if(addEmployeeInput){
                return true;
            } else{
                console.log('You must choose Engineer or Intern')
            }
        },
        when: function(answers){
            return answers.confirmAddEmployee == true;
        },
    },
    {
        type: 'input',
        name: 'name',
        message: 'Please enter your Employees name',
        validate: function(nameInput){
            if(nameInput){
                return true;
            } else{
                console.log('Please enter your Employees name');
                return false;
            } 
        },
        when: function(answers){
            return answers.confirmAddEmployee == true;
        }
    },
    {
        type: 'input',
        name: 'id',
        message: 'Please enter your Employees id',
        validate: function(idInput){
            if(idInput){
                return true;
            } else{
                console.log('Please enter your Employees id');
                return false;
            } 
        },
        when: function(answers){
            return answers.confirmAddEmployee == true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your Employees email',
        validate: function(emailInput){
            if(emailInput){
                return true;
            } else{
                console.log('Please enter your Employees email');
                return false;
            } 
        },
        when: function(answers){
            return answers.confirmAddEmployee == true;
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your Employees github username',
        validate: function(githubInput){
            if(githubInput){
                return true;
            } return false;
        },
        when: function(answers){
            return answers.confirmAddEmployee == true && answers.employeeType === 'Engineer'
        }
    },
    {
        type: 'input',
        name: 'school',
        message: 'Please enter your Employees school username',
        validate: function(schoolInput){
            if(schoolInput){
                return true;
            } return false;
        },
        when: function(answers){
            return answers.confirmAddEmployee == true && answers.employeeType === 'Intern'
        }
    }
    ])
    .then(employeeAnswers => {
        if(employeeAnswers.confirmAddEmployee == true){
            switch (employeeAnswers.employeeType) {
                case 'Engineer':
                const engineer = new Engineer(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.github);
                employees.push(engineer);
                break;
                case 'Intern':
                const intern = new Intern(employeeAnswers.name, employeeAnswers.id, employeeAnswers.email, employeeAnswers.school);
                employees.push(intern);
                break;
            }
            return promptEmployee();
        }
    })
};

promptManager()
.then(answerData => {
manager = new Manager(answerData.name, answerData.email, answerData.id, answerData.office);


//     const pageHtml = generatePage(htmlData);

// fs.writeFile('index.html', pageHtml, err => {
//     if(err) throw new Error(err);
//     console.log("HTML was created!");
// });
})
.then(promptEmployee)
.then(()=> {
const pageHtml = generatePage(manager, employees);

fs.writeFile('index.html', pageHtml, err => {
if(err) throw new Error(err);
console.log("HTML was created!");
});
})
