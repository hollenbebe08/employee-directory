const { json } = require("express");
const Employee = require("../lib/Employee")

test('creates an Employee object', () => {
    const employee = new Employee('Sally', 2, 'sally@fakenews.com', 'Employee');

    expect(typeof(employee)).toBe('object')
});

test('creates an Employee name', () => {
    const employee = new Employee('Sally', 2, 'sally@fakenews.com', 'Employee');

    //the name should be a string
    expect(employee.name).toEqual(expect.any(String));
})

test('creates an Employee id', () => {
    const employee = new Employee('Sally', 2, 'sally@fakenews.com', 'Employee');

    //the id should be a number
    expect(employee.id).toEqual(expect.any(Number));
})

test('creates an Employee email', () => {
    const employee = new Employee('Sally', 2, 'sally@fakenews.com', 'Employee');

    //the email should be a string
    expect(employee.email).toEqual(expect.any(String));
})

test('creates an employee role', () => {
    const employee = new Employee('Sally', 2, 'sally@fakenews.com', 'Employee');

    //the role should be an array
    expect(employee.role).toEqual(expect.any(String));
})

test('gets employees name', () => {
    const employeeName = new Employee('Sally', 2, 'sally@fakenews.com', 'Employee');

    expect(employeeName.getName()).toEqual(expect.any(String));

})

test('gets employees id', () => {
    const employeeId = new Employee('Sally', 2, 'sally@fakenews.com', 'Employee');

    expect(employeeId.getId()).toEqual(expect.any(Number));
})

test('gets employees email', () => {
    const employeeEmail = new Employee('Sally', 2, 'sally@fakenews.com', 'Employee');

    expect(employeeEmail.getEmail()).toEqual(expect.any(String));
})

test('gets employees role', () => {
    const employeeRole = new Employee('Sally', 2, 'sally@fakenews.com', 'Employee');

    expect(employeeRole.getRole()).toEqual('Employee');
})