const mongoose = require('mongoose')
const models = require('../models')
const Url = mongoose.model('Url', models.Url)

module.exports = {
	save: (data) => {
		data.date_created = new Date()
		const url = new Url(data)
		url.save((err, model) => {
			if (err) {
				return console.error(err)
			}
			console.log(model, 'saved!!!')
		})
	},
	getExistingURL: (checkedShortURL) => {
		return Url.findOne({ 'shortURL': checkedShortURL })
	}
}