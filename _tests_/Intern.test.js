const Intern = require('../lib/Intern')

describe('Intern', () => {
    describe('Initialization', () => {
        it("Should create a new Intern object", () => {
        const intern = new Intern('John', 12, 'John@gmail.com', 'school name');
        expect(intern.name).toEqual(expect.any(String));
        expect(intern.id).toEqual(expect.any(Number));
        expect(intern.email).toEqual(expect.any(String));
        expect(intern.school).toEqual(expect.any(String));
    });
});
});