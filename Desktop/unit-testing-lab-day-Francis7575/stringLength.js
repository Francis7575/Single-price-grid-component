// Objective: Develop a function to return the length of a string.

// Tasks:

// Create a function getStringLength that accepts a string and returns its length.
// Write tests for an empty string, a regular string, and a string with spaces.

function getStringLength(str) {
    return str.length;
}

describe('getStringLength', () => {
    it('should return 0 for an empty string', () => {
        const emptyStr = '';
        expect(getStringLength(emptyStr)).toBe(0);
    });

    it('should return the correct length for a regular string', () => {
        const regularStr = 'Hello, world!';
        expect(getStringLength(regularStr)).toBe(13);
    });

    it('should include spaces in the length of the string', () => {
        const strWithSpaces = '  There are spaces here  ';
        expect(getStringLength(strWithSpaces)).toBe(25);
    });
});