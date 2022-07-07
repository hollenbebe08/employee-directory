const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');

const managerQuestions = require('./lib/Manager-questions');
const generatePage = require('./src/Master-template');

const render = async() => {
    const managerResponse = await inquirer.prompt(managerQuestions);
    const staffManager = new Manager(managerResponse.name)
};


render()
.then(staffManager => {
    const pageHtml = generatePage(staffManager);

    fs.writeFile('index.html', pageHtml, err => {
        if (err) throw new Error(err);
        console.log('HTML was created!')
})
});





