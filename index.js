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
            message: 'manager name',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log('Please enter a name! (Required)');
                  return false;
                }
            }
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
                message: 'engineer name',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log('Please enter a name! (Required)');
                      return false;
                    }
                }
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
            return menu();
        });
        }
        else if (ans.options === 'Add an intern') {
            return inquirer
                .prompt([
                {
                    type: 'input',
                    name: 'name',
                    message: 'intern name',
                    validate: nameInput => {
                        if (nameInput) {
                          return true;
                        } else {
                          console.log('Please enter a name! (Required)');
                          return false;
                        }
                    }
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