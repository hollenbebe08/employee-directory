function Employee(name, id, email, role) {
    this.name = '';
    this.id = 1;
    this.email = '';
    this.role = ['Employee', 'Manager', 'Engineer', 'Intern'];
};

Employee.prototype.getName = function() {
    return this.name;
}

Employee.prototype.getId = function() {
   return this.id;
}

Employee.prototype.getEmail = function() {
    return this.email;
}

Employee.prototype.getRole = function() {
    return 'Employee';
}

module.exports = Employee;