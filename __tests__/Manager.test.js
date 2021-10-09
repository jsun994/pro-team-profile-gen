const Manager = require('../lib/Manager.js');

test('creates a manager object', () => {
    const manager = new Manager('jay', 9, 'jaysun054@gmail.com', 8);

    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets manager role', () => {
    const manager = new Manager('jay', 9, 'jaysun054@gmail.com', 8);

    expect(manager.getRole()).toBe('Manager');
});