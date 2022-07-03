const Manager = require("../lib/Manager");

test('should create an office number', () => {
    const manager = new Manager();

    //the officeNumber should be a number
    expect(manager.officeNumber).toEqual(expect.any(Number));

}); 

test('gets managers role', () => {
    const managerRole = new Manager();

    expect(managerRole.getRole()).toEqual('Manager');
})