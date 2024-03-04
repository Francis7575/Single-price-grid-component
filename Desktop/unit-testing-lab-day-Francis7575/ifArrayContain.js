// Objective: Check if an array contains a specific element

// Tasks:

// Implement a function containsElement that takes an array and an element as parameters, returning true if the element is in the array, otherwise false.
// Setup two tests: one where the element is in the array and another where it is not

function containsElement(array, element) {
    return array.includes(element);
}

describe('containsElement', () => {
    it('should return true if the element is in the array', () => {
        const array = [1, 2, 3, 4, 5];
        const element = 3;
        expect(containsElement(array, element)).toBe(true);
    });

    it('should return false if the element is not in the array', () => {
        const array = [1, 2, 3, 4, 5];
        const element = 6;
        expect(containsElement(array, element)).toBe(false);
    });
});