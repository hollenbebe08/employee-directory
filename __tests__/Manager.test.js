const Manager = require("../lib/Manager");

test('should create an office number', () => {
    const manager = new Manager('Sally', 2, 'sally@fakenews.com', 100);

    //the officeNumber should be a number
    expect(manager.officeNumber).toEqual(expect.any(Number));

}); 

test('gets managers role', () => {
    const managerRole = new Manager('Sally', 2, 'sally@fakenews.com', 100);

    expect(managerRole.getRole()).toEqual('Manager');
})