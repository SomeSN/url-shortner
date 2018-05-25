// import libraries
require('dotenv').config()
const express = require('express')
const errorhandler = require('errorhandler')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const routes = require('./routes')
const mongodb = require('mongodb')
const mongoose = require('mongoose')

// start the express app:
const app = express()

// database connection
mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error'))

// include the middleware:
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use(cors())

// create the routes:
app.post('/', routes.postForm)

app.get('/:shortcode', routes.doRedirect)

app.get('/urls', (req, res) => {
    return res.status(200).send({
        'OK': 'Success'
    })
})

app.listen(process.env.PORT || 3000)
console.log('they are watching. they are listening.')
