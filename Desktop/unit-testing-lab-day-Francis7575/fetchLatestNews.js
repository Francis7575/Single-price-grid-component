// Objective: Build a class that loads the latest news from https://fakeapi.com/news/latest.
// Implementation:

// Create a class NewsLoader with an async method loadLatestNews to pull news data from the API.

// Mocking:
// Use Jest to mock the fetch call, simulating a response with the latest news items.

// Test:
// Ensure loadLatestNews successfully retrieves and returns the mocked news data.

class NewsLoader {
    async loadLatestNews() {
        try {
            const response = await fetch('https://fakeapi.com/news/latest');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error loading latest news:', error);
            throw error;
        }
    }
}

module.exports = NewsLoader;
