const randomStringGen = require('../random-generation')
const database = []

module.exports = {
	postForm(req, res) {
		if(req.body.shortURL === undefined || req.body.shortURL === null || req.body.shortURL === ''){
			req.body.shortURL = randomStringGen.randomStringGenerator()
		}
		database.push(req.body)
		res.status(200).send({
          message : `Success! Your URL has been created: ${req.body.shortURL}`,
          shortURL: req.body.shortURL,
          originalURL: req.body.originalURL
        })
		console.log(database)
    },
}
