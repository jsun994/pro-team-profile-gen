const Employee = require('./Employee');

//intern class
class Intern extends Employee {
    constructor(name, id, email, school) {
        //super
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
    }
}
module.exports = Intern;