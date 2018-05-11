const mongoose = require('mongoose')


//Define a schema
const urlSchema = new mongoose.Schema({
    date_created: Date,
    originalURL: String,
    shortenedURL: String
})

module.exports = mongoose.model('Url', urlSchema)
