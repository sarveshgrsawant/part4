const supertest = require('supertest')
const mongoose = require('mongoose')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')

const initialBlogs = [
  {
    "title": "REACTJS1",
    "author": "SARVESH",
    "url": "bloglist.com/REACTJS1",
    "likes": 100
  },
  {
    "title": "REACTJS2",
    "author": "SARVESH",
    "url": "bloglist.com/REACTJS1",
    "likes": 100
  },
]

beforeEach(async () => {
  await Blog.deleteMany({})

  let blogObject = new Blog(initialBlogs[0])
  await blogObject.save()

  blogObject = new Blog(initialBlogs[1])
  await blogObject.save()
})

test('all blogs are returned', async () => {
    const response = await api.get('/api/blogs')
                    .expect('Content-Type', /application\/json/)
  
    expect(response.body)
    .toHaveLength(initialBlogs.length)
})

test('a valid blog can be added ', async () => {

  const newNote = {
    "title": "REACTJS3",
    "author": "SARVESH",
    "url": "bloglist.com/REACTJS1",
    "likes": 100
  }

  await api
    .post('/api/blogs')
    .send(newNote)
    .expect('Content-Type', /application\/json/)

  const response = await api.get('/api/blogs')
  expect(response.body).toHaveLength(initialBlogs.length + 1)
})

afterAll(() => {
  mongoose.connection.close()
})