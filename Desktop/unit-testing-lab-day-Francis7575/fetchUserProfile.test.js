const fetchMock = require('jest-fetch-mock');
const UserProfileFetcher = require('./UserProfileFetcher');

fetchMock.enableMocks();

describe('UserProfileFetcher', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    it('should fetch user profile correctly', async () => {
        const fakeUserProfile = { name: 'John Doe', age: 30, email: 'john.doe@example.com' };
        
        fetchMock.mockResponseOnce(JSON.stringify(fakeUserProfile));

        const userProfileFetcher = new UserProfileFetcher();
        const userProfile = await userProfileFetcher.fetchProfile();

        expect(fetch).toHaveBeenCalledWith('https://fakeapi.com/user/profile');

        expect(userProfile).toEqual(fakeUserProfile);
    });
});
