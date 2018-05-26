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
	},
	/* Checks to make sure that the URL is a legalURL. */
	dirtyOriginalURLCheck: (req) => {
		const lowerCaseOriginalURL = req.body.originalURL.toLowerCase();
		if(lowerCaseOriginalURL.indexOf('http') === 0 || lowerCaseOriginalURL.indexOf('localhost') === 0){
			return true
		}
		res.status(400).send({
			message: `Sorry. ${req.body.originalURL} is not a valid address.`
		})
		return false
	}
}
