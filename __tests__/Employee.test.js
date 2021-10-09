const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('jay', 9, 'jaysun054@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets emp name', () => {
    const employee = new Employee('jay', 9, 'jaysun054@gmail.com');

    expect(employee.getName()).toBe('jay');
});

test('gets emp id', () => {
    const employee = new Employee('jay', 9, 'jaysun054@gmail.com');

    expect(employee.getId()).toBe(9);
});

test('gets emp email', () => {
    const employee = new Employee('jay', 9, 'jaysun054@gmail.com');

    expect(employee.getEmail()).toBe('jaysun054@gmail.com');
});

test('gets emp role', () => {
    const employee = new Employee('jay', 9, 'jaysun054@gmail.com');

    expect(employee.getRole()).toBe('Employee');
});