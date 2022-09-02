const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('Initialization', () => {
        it("Should create a new Employee instance with name, id, and email");
        const employee = new Employee("John");
        expect(employee.name).toEqual("John");
        expect(employee.id).toEqual(1);
        expect(employee.email).toEqual("john@email.com");
    });
});