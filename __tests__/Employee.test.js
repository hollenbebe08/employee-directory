const Employee = require("../lib/Employee")

test('creates an Employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object')
});

test('creates an Employee id', () => {
    const employee = new Employee();

    //the id should be an array
    expect(employee.id).toEqual(expect.any(Array));
})

