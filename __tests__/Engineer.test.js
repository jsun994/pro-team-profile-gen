const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('jay', 9, 'jaysun054@gmail.com', 'jsun994');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));
});

test('gets engineer github', () => {
    const engineer = new Engineer('jay', 9, 'jaysun054@gmail.com', 'jsun994');

    expect(engineer.getGithub()).toBe('jsun994');
});

test('gets engineer role', () => {
    const engineer = new Engineer('jay', 9, 'jaysun054@gmail.com', 'jsun994');

    expect(engineer.getRole()).toBe('Engineer');
});