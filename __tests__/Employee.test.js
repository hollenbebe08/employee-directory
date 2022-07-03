const Employee = require("../lib/Employee")

test('creates an Employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object')
});

test('creates an Employee name', () => {
    const employee = new Employee();

    //the name should be a string
    expect(employee.name).toEqual(expect.any(String));
})

test('creates an Employee id', () => {
    const employee = new Employee();

    //the id should be an array
    expect(employee.id).toEqual(expect.any(Array));
})

test('creates an Employee email', () => {
    const employee = new Employee();

    //the email should be a string
    expect(employee.email).toEqual(expect.any(String));
})

test('creates an employee role', () => {
    const role = 'Employee';
    const employee = new Employee();

    //the role should be an array
    expect(employee.role).toEqual(expect.any(Array));
})

