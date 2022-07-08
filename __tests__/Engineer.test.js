const Engineer = require("../lib/Engineer");

test("should create a github link", () => {
    const engineer = new Engineer('Sally', 2, 'sally@fakenews.com', 'hollenbebe08');

    expect(engineer.github).toEqual(expect.any(String)); 
});

test('gets github link', () => {
    const engineer = new Engineer('Sally', 2, 'sally@fakenews.com', 'hollenbebe08');

    expect(engineer.getGithub()).toEqual(expect.any(String));
});

test('gets engineer role', () => {
    const engineer = new Engineer('Sally', 2, 'sally@fakenews.com', 'hollenbebe08');

    expect(engineer.getRole()).toEqual('Engineer');
})