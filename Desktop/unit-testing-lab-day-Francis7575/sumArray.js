// Objective: Calculate the sum of numbers in an array

// Tasks:

// Write a function named arraySum that accepts an array of numbers and returns their sum
// Write tests for a scenario with a mix of positive and negative numbers, and for an empty array.

function arraySum(numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}
describe('arraySum', () => {
    it('should return the correct sum for an array with a mix of positive and negative numbers', () => {
        const numbers = [1, 2, -3, 4, -5];
        const expectedSum = 1 + 2 - 3 + 4 - 5; 
        expect(arraySum(numbers)).toBe(expectedSum);
    });

    it('should return 0 for an empty array', () => {
        const numbers = [];
        const expectedSum = 0;
        expect(arraySum(numbers)).toBe(expectedSum);
    });
});