// Objective: Develop a function to find the mininum number in an array

// Task: Create findMinNumber.js with a function findMinNumber that takes an array of numbers and returns the highest number.

// Testing: In findMinNumber.test.js, write tests for an array of positive numbers, an array with both positive and negative numbers, and an array with a single number (should return that number).

function findMinNumber(numbers) {
    if (numbers.length === 0) {
        throw new Error("Array is empty");
    }
    return Math.min(...numbers);
}

module.exports = findMinNumber;