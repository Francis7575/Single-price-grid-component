const NewsLoader = require('./NewsLoader');

describe('NewsLoader', () => {
    it('should load the latest news', async () => {
        const mockedNewsData = [
            { title: 'Fake News 1', content: 'This is fake news 1.' },
            { title: 'Fake News 2', content: 'This is fake news 2.' }
        ];

        global.fetch = jest.fn().mockResolvedValue({
            json: () => Promise.resolve(mockedNewsData)
        });

        const newsLoader = new NewsLoader();
        const latestNews = await newsLoader.loadLatestNews();

        expect(latestNews).toEqual(mockedNewsData);
    });

    it('should handle errors when loading news', async () => {
        const errorMessage = 'Failed to fetch';

        global.fetch = jest.fn().mockRejectedValue(new Error(errorMessage));

        const newsLoader = new NewsLoader();

        await expect(newsLoader.loadLatestNews()).rejects.toThrow(errorMessage);
    });
});
