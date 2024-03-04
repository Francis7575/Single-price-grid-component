// Objective: Develop a function to find the maximum number in an array.

// Task: Create findMaxNumber.js with a function findMaxNumber that takes an array of numbers and returns the highest number.

// Testing: In findMaxNumber.test.js, write tests for an array of positive numbers, an array with both positive and negative numbers, and an array with a single number (should return that number).

function findMaxNumber(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.max(...numbers);
}

module.exports = findMaxNumber;
