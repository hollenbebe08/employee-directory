const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template.js');


const promptUser = htmlData => {
    return inquirer
    .prompt([])
};

promptUser()
.then(htmlData => {
    const pageHtml = generatePage(htmlData);

fs.writeFile('HTML', pageHtml, err =>{
    if (err) throw new Error(err);
    console.log("README was created!");
});
});
