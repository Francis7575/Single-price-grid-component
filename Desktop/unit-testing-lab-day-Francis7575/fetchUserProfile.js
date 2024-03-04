// Objective: Create a class that fetches user profile data from a fake API endpoint: https://fakeapi.com/user/profile.
// Implementation:

// Create a class UserProfileFetcher with an async method fetchProfile that uses fetch to get data from the API.

// Mocking:
// Use Jest to mock the fetch call, returning a fake user profile response.

// Test:
// Write a test to verify that fetchProfile correctly returns the mocked user profile data.

class UserProfileFetcher {
    async fetchProfile() {
        try {
            const response = await fetch('https://fakeapi.com/user/profile');
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching user profile:', error);
            throw error;
        }
    }
}
module.exports = UserProfileFetcher;
