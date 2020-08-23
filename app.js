const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const blogRouter = require('../bloglist/controllers/blogs')
const userRouter = require('../bloglist/controllers/users')
const loginRouter = require('../bloglist/controllers/login')
const config = require('../bloglist/utils/config')
const middleware = require('../bloglist/utils/middleware')

const mongoUrl = config.MONGODB_URI
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(express.json())

app.use('/api/login', loginRouter)
app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)

app.use(middleware.errorHandler)
app.use(middleware.unknownEndpoint)

module.exports = app