const capitalizeString = require('./capitalizeString');

test('capitalize first letter of a lowercase word', () => {
    expect(capitalizeString('test')).toBe('Test');
});

test('capitalize first letter of a capitalized word', () => {
    expect(capitalizeString('Example')).toBe('Example');
});

test('capitalize first letter of an all uppercase word', () => {
    expect(capitalizeString('HELLO')).toBe('Hello');
});
