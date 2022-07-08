const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, email, id, officeNumber){
        super(name, id, email, 'Manager');
        this.officeNumber = officeNumber;
    }
};

Manager.prototype.officeNumber = function() {
    return this.officeNumber;
};

module.exports = Manager;