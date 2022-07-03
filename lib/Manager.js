const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, email, id, officeNumber){
        super(name, id, email);
        this.officeNumber = 100;
    }
};

Manager.prototype.officeNumber = function() {
    return this.officeNumber;
};

Manager.prototype.getRole = function() {
    return 'Manager';
}

module.exports = Manager;