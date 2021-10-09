const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./src/generate.js');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const addManager = [
    {
        type: 'input',
        name: 'name',
        message: 'manager name'
    },
    {
        type: 'input',
        name: 'id',
        message: 'manager id'
    },
    {
        type: 'input',
        name: 'email',
        message: 'manager email'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'manager office number'
    }
];

//write to file
/*
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('HTML generated!');
    });
}
*/

//initialize app
function init() {
    inquirer.prompt(addManager)
    .then(answers => {
        console.log(answers);
        const { name, id, email, officeNumber } = answers;
        const manager = new Manager(name, id, email, officeNumber);
        console.log(manager);
        //writeToFile('./dist/index.html', generate(answers));
    })
    .catch(err => {
        return console.log(err);
    });
}

//function call to initialize app
init();