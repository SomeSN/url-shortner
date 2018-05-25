const randomStringGen = require('../random-generation')
const mongoose = require('mongoose')

module.exports = {
	checkShortURL: (req) => {
		if(req.body.shortURL === undefined || req.body.shortURL === null || req.body.shortURL === ''){
			req.body.shortURL = randomStringGen.randomStringGenerator()
			return true
		} else if(req.body.shortURL.length < 7){
			res.status(400).send({
				message: `Sorry. ${req.body.shortURL} is not at least 7 characters long.`
			})
			return false
		}
		return true
	}
}
