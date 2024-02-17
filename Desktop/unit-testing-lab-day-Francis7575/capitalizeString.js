// Objective: Create a function that capitalizes the first letter of a string.

// Task: In capitalizeString.js, define a function capitalizeString that accepts a string and returns it with the first character capitalized.

// Testing: In capitalizeString.test.js, include tests for a lowercase word (e.g., "test" should return "Test"), a word that's already capitalized, and a string that's all uppercase (which should only change the first letter to uppercase and the rest to lowercase).
function capitalizeString(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

module.exports = capitalizeString;

