const mongoose = require('mongoose')
const nodeFetch = require('node-fetch')

module.exports = {
	/* Checks to make sure that the URL starts with http or localhost. */
	dirtyOriginalURLCheck: (req, res) => {
		console.log(req.body.originalURL)
		if(req.body.originalURL !== undefined && req.body.originalURL !== null){
			const lowerCaseOriginalURL = req.body.originalURL.toLowerCase();
			if(lowerCaseOriginalURL.indexOf('http') === 0 || lowerCaseOriginalURL.indexOf('localhost') === 0){
				return true
			}
		}
		res.status(400).send({
			message: `Sorry. ${req.body.originalURL} is not a valid address.`
		})
		return false
	},
	/* Fetches and returns a promise using the website attempting to be contacted. Due to the asyncrhonous nature of promises, this does not send a response to the client unlike the other validation fictions. */
	fetchOriginalURLCheck: (req) => {
		return nodeFetch(req.body.originalURL, { mode: 'no-cors' })
	},
	checkShortURLLength: (req, res) => {
		if(req.body.shortURL.length < 7){
			res.status(400).send({
				message: `Sorry. ${req.body.shortURL} is not at least 7 characters long.`
			})
			return false
		}
		return true
	},
}
