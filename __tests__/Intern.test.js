const Intern = require("../lib/Intern");

test('should create a school name', () => {
    const intern = new Intern('Sally', 2, 'sally@fakenews.com', 'Crown College');

    expect(intern.school).toEqual(expect.any(String));
});

test('get school name', () => {
    const intern = new Intern('Sally', 2, 'sally@fakenews.com', 'Crown College');

    expect(intern.getSchool()).toEqual(expect.any(String));
});

test('get intern role', () => {
    const intern = new Intern('Sally', 2, 'sally@fakenews.com', 'Crown College');

    expect(intern.getRole()).toEqual('Intern');
});