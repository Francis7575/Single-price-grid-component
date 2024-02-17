// Objective: Create a function to determine if a number is even.

// Tasks:

// Implement a function named isEven that takes a number as its parameter and returns true if the number is even, false otherwise.
// Write two test cases for isEven: one with an even number and another with an odd number.

function isEven(number) {
    return number % 2 === 0;
}

test('even number returns true', () => {
    expect(isEven(4)).toBe(true);
});

test('odd number returns false', () => {
    expect(isEven(7)).toBe(false);
});
