const findMaxNumber = require('./findMaxNumber');

describe('findMaxNumber', () => {
    it('should return the maximum number from an array of positive numbers', () => {
        const numbers = [5, 3, 9, 1, 7];
        expect(findMaxNumber(numbers)).toBe(9);
    });

    it('should return the maximum number from an array with positive and negative numbers', () => {
        const numbers = [5, -3, 9, -1, 7];
        expect(findMaxNumber(numbers)).toBe(9);
    });

    it('should return the single number from an array with a single number', () => {
        const numbers = [5];
        expect(findMaxNumber(numbers)).toBe(5);
    });

    it('should throw an error for an empty array', () => {
        const numbers = [];
        expect(() => {
            findMaxNumber(numbers);
        }).toThrow("Array is empty");
    });
});
