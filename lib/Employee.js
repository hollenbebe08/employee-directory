class Employee {
    constructor (name, id, email) {
    this.name = name;
    this.id = [];
    this.email = email;
    }
};

Employee.prototype.getId = function() {
    this.id = [1, 2, 3, 4, 5]
}

module.exports = Employee;