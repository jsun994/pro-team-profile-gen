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
            message: 'Please enter name of manager',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter a name! (required)');
                  return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter id of manager'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter email of manager'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Please enter office number of manager'
        }
    ])
    .then(mgrData => {
        const { name, id, email, officeNumber } = mgrData;
        const manager = new Manager(name, id, email, officeNumber);
        profiles.push(manager);
    });
};

const menu = () => {
    console.log(`==================================`);
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
            return inquirer
            .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Please enter name of engineer',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('Please enter a name! (required)');
                      return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter id of engineer'
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter email of engineer'
            },
            {
                type: 'input',
                name: 'github',
                message: 'Please enter github of engineer'
            }
        ])
        .then(engrData => {
            const { name, id, email, github } = engrData;
            const engineer = new Engineer(name, id, email, github);
            profiles.push(engineer);
            return menu();
        });
        }
        else if (ans.options === 'Add an intern') {
            return inquirer
                .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'Please enter name of intern',
                    validate: nameInput => {
                        if (nameInput) {
                          return true;
                        } else {
                          console.log('Please enter a name! (required)');
                          return false;
                        }
                    }
                },
                {
                    type: 'input',
                    name: 'id',
                    message: 'Please enter id of intern'
                },
                {
                    type: 'input',
                    name: 'email',
                    message: 'Please enter email of intern'
                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'Please enter school of intern'
                }
            ])
            .then(internData => {
                const { name, id, email, school } = internData;
                const intern = new Intern(name, id, email, school);
                profiles.push(intern);
                return menu();
            });
        }
        else {
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
    .then(menu)
    .then(data => {
        return htmlGenerate(data);
    })
    .then(pageHTML => {
        return writeToFile('./dist/index.html', pageHTML);
    })
    .catch(err => {
        return console.log(err);
    });