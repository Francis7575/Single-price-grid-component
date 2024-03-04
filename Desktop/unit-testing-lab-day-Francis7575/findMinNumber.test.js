const findMinNumber = require('./findMinNumber');

describe('findMinNumber', () => {
    it('should return the minimum number from an array of positive numbers', () => {
        const numbers = [5, 3, 9, 1, 7];
        expect(findMinNumber(numbers)).toBe(1);
    });

    it('should return the minimum number from an array with positive and negative numbers', () => {
        const numbers = [5, -3, 9, -1, 7];
        expect(findMinNumber(numbers)).toBe(-3);
    });

    it('should return the single number from an array with a single number', () => {
        const numbers = [5];
        expect(findMinNumber(numbers)).toBe(5);
    });

    it('should throw an error for an empty array', () => {
        const numbers = [];
        expect(() => {
            findMinNumber(numbers);
        }).toThrow("Array is empty");
    });
});
