// Objective: Create a simple asynchronous function that returns a greeting.

// Tasks:

// Implement an async function asyncGreeting that returns "Hello, World!" after a delay of 1 second.
// Write a test case using async/await to ensure the function returns the expected value.

async function asyncGreeting() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Hello, World!");
        }, 1000);
    });
}

describe('asyncGreeting', () => {
    it('should return "Hello, World!" after 1 second', async () => {
        const expectedGreeting = "Hello, World!";
        const result = await asyncGreeting();
        expect(result).toBe(expectedGreeting);
    });
});