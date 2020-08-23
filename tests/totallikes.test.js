const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
    const blogs = [{
        "title": "REACTJS1",
        "author": "SARVESH",
        "url": "bloglist.com/REACTJS1",
        "likes": 100
    }]

    const result = listHelper.totalLikes(blogs)
    expect(result).toBe(100)
})