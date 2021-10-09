const fs = require('fs');
const inquirer = require('inquirer');
const generate = require('./src/generate.js');

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

const menu = () => {
    console.log(`
    ================
    `);
    return inquirer
        .prompt([
        {
            type: 'list',
            name: 'options',
            message: 'choose an option',
            choices: ['Add an engineer', 'Add an intern', 'Finish building my team']
        }
    ])
    .then(ans => {
        if (ans.options === 'Add an engineer') {
            promptEngineer();
        }
        else if (ans.options === 'Add an intern') {
            promptIntern();
        }
        else {
            console.log(profiles);
            return profiles;
        }
    });
};

const promptEngineer = () => {
    inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'engineer name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'engineer id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'engineer email'
        },
        {
            type: 'input',
            name: 'github',
            message: 'engineer github'
        }
    ])
    .then(engrData => {
        const { name, id, email, github } = engrData;
        const engineer = new Engineer(name, id, email, github);
        profiles.push(engineer);
        menu();
    });
};

const promptIntern = () => {
    return inquirer
        .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'intern name'
        },
        {
            type: 'input',
            name: 'id',
            message: 'intern id'
        },
        {
            type: 'input',
            name: 'email',
            message: 'intern email'
        },
        {
            type: 'input',
            name: 'school',
            message: 'intern school'
        }
    ])
    .then(internData => {
        const { name, id, email, school } = internData;
        const intern = new Intern(name, id, email, school);
        profiles.push(intern);
        menu();
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
    .then(menu)
    .catch(err => {
        return console.log(err);
    });