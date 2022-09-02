const Manager = require('../lib/Manager')

describe('Manager', () => {
    describe('Initialization', () => {
        it("Should create a new Manager object", () => {
        const manager = new Manager('John', 12, 'John@gmail.com', 'johnusername');
        expect(manager.name).toEqual(expect.any(String));
        expect(manager.id).toEqual(expect.any(Number));
        expect(manager.email).toEqual(expect.any(String));
        expect(manager.officeNumber).toEqual(expect.any(String));
    });
});
});