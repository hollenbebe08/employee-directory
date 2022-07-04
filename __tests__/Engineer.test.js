const Engineer = require("../lib/Engineer");

test("should create a github link", () => {
    const engineer = new Engineer();

    expect(engineer.github).toEqual(expect.any(String)); 
});

test('gets github link', () => {
    const engineer = new Engineer();

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('gets engineer role', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual('Engineer');
})