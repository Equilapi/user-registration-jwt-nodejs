const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

const userRouter = require('./routers/user')
require('./db/db')

const app = express()
app.use(cors())

app.use(morgan('dev'))
app.use(express.json())

// Routes
app.get('/', (req, res) => {
    res.json({
        message: 'USER REGISTRATION API NODEJS & JWT'
    })
})

app.use('/api/v1/users', userRouter)

module.exports = app