//import libraries:
const express = require('express')
const errorhandler = require('errorhandler')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')

// start the express app:
const app = express()

// include the middleware:
app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
app.use(cors())


// create the routes:
app.get('/', (request, response) => {
    return response.status(200).send({
        'message': 'Hello There!'
    })
})

app.listen(3000)
