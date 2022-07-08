const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email, 'Intern');
        this.school = school;
    }
};

Intern.prototype.getSchool = function() {
    return this.school;
};

module.exports = Intern;