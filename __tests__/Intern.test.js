const Intern = require('../lib/Intern.js');

test('creates a intern object', () => {
    const intern = new Intern('jay', 9, 'jaysun054@gmail.com', 'ucsd');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(String));
    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school', () => {
    const intern = new Intern('jay', 9, 'jaysun054@gmail.com', 'ucsd');

    expect(intern.getSchool()).toBe('ucsd');
});

test('gets intern role', () => {
    const intern = new Intern('jay', 9, 'jaysun054@gmail.com', 'ucsd');

    expect(intern.getRole()).toBe('Intern');
});