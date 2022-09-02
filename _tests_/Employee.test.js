const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it("Should create a new Employee instance with name, id, and email", () => {
        const employee = new Employee('John', 12, 'John@gmail.com');
        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });
});
});