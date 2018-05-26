const validation = require('../validation')
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
		if(validation.checkShortURL(req)) && validation.dirtyLongURLCheck()){
			res.status(200).send({
				message: `Success! Your URL has been created: ${req.body.shortURL}`,
				shortURL: req.body.shortURL,
				originalURL: req.body.originalURL
			})
			save(req.body)
		}
		//}
	},
    doRedirect(req, res) {
        const shortcode = req.params.shortcode

        Url.findOne({ 'shortURL': shortcode }, function (err, matchedItem) {
            if (err) {
                console.error(err)
				res.status(500).send({
					message: 'Something when wrong with the database.'
				})
                return
            }
            //res.status(200).send(matchedItem)
            res.redirect(matchedItem.originalURL)
        })

    }
}
