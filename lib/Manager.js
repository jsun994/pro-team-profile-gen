const Employee = require('./Employee');

//manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        //super
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}
module.exports = Manager;