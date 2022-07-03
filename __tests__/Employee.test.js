const Employee = require("../lib/Employee")

test('creates an Employee object', () => {
    const employee = new Employee('');

    expect(employee.name).toBe('')
    expect(employee.email).toBe('');
});

