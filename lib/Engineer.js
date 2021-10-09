const Employee = require('./Employee');

//engineer class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //super
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
    }
}
module.exports = Engineer;