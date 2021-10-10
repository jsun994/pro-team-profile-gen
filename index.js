const fs = require('fs');
const inquirer = require('inquirer');
const htmlGenerate = require('./src/generate.js');

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

const profiles = [];

const promptManager = () => {
    return inquirer
        .prompt([
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
    ])
    .then(mgrData => {
        const { name, id, email, officeNumber } = mgrData;
        const manager = new Manager(name, id, email, officeNumber);
        profiles.push(manager);
    });
};

const promptEmp = () => {
    console.log(`
    ==================
    Add a New Employee
    ==================
    `);
    return inquirer
        .prompt([
        {
            type: 'list',
            name: 'role',
            message: 'emp role',
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'emp name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'emp id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'emp email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'emp github',
            when: (ans) => ans.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'emp school',
            when: (ans) => ans.role === 'Intern'
        },
        {
            type: 'confirm',
            name: 'more',
            message: 'another employee',
            default: false
        }
    ])
    .then(empData => {
        if (empData.role === 'Engineer') {
            const { name, id, email, github } = empData;
            const engineer = new Engineer(name, id, email, github);
            profiles.push(engineer);
        } else {
            const { name, id, email, school } = empData;
            const intern = new Intern(name, id, email, school);
            profiles.push(intern);
        }
        if (empData.more) {
            return promptEmp();
        } else {
            console.log(profiles);
            return profiles;
        }
    });
};

//write to file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log('HTML generated!');
    });
}

//start
promptManager()
    .then(promptEmp)
    .then(profiles => {
        return htmlGenerate(profiles);
    })
    .then(pageHTML => {
        return writeToFile('./dist/index.html', pageHTML);
    })
    .catch(err => {
        return console.log(err);
    });