const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    describe('Initialization', () => {
        it("Should create a new Engineer object", () => {
        const engineer = new Engineer('John', 12, 'John@gmail.com', 'johnusername');
        expect(engineer.name).toEqual(expect.any(String));
        expect(engineer.id).toEqual(expect.any(Number));
        expect(engineer.email).toEqual(expect.any(String));
        expect(engineer.github).toEqual(expect.any(String));
    });
});
});