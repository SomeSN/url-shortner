const randomStringGen = require('../random-generation')
const mongoose = require('mongoose')
const models = require('../models')
const Url = mongoose.model('Url', models.Url)

const save = (data) => {
	data.date_created = new Date()
	const url = new Url(data)
	url.save((err, model) => {
		if (err) {
			return console.error(err)
		}
		console.log(model, 'saved!!!')
	})
}

module.exports = {
	postForm(req, res) {
		if(req.body.shortURL === undefined || req.body.shortURL === null || req.body.shortURL === ''){
			req.body.shortURL = randomStringGen.randomStringGenerator()
			res.status(200).send({
				message: `Success! Your URL has been created: ${req.body.shortURL}`,
				shortURL: req.body.shortURL,
				originalURL: req.body.originalURL
			})
			save(req.body)
		} else {
			res.status(200).send({
				message: `Success! Your URL has been created: ${req.body.shortURL}`,
				shortURL: req.body.shortURL,
				originalURL: req.body.originalURL
			})
			save(req.body)
		}
	},
    doRedirect(req, res) {
        const shortcode = req.params.shortcode
		console.log('@@@@@@@@@@@@@'+shortcode)
        Url.findOne({ 'shortURL': shortcode }, function (err, matchedItem) {
			if (err) {
				console.error(err)
				res.status(500).send({
					message: 'There was a problem connecting to the database.'
				})
				return
            }
			console.log('@@@@@@@@@@@@@')
            //res.status(200).send(matchedItem)
            try {
				console.log('@@@@@@@@@@@@@ trying')
				res.redirect(matchedItem.originalURL)
			} catch(e) {
				console.log('@@@@@@@@@@@@@ doh')
				console.error(e)
				res.status(500).send({
					message: 'The url failed to connect.'
				})
			}
        })

    }
}
