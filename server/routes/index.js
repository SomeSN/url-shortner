const randomStringGen = require('../random-generation')
/* Contains all functions that access the database using mongoose. */
const databaseAccess = require('../database-access')
/* Except for fetchOrginalURLCheck the Validation functions respond to the client when validation fails, so a false value means the response has already been sent. */
const validation = require('../validation')

/* Recursively generates a random short URL and then stores it in the database. Only called when a random short URL needs to be generated. */
const generateRandomShortURL = (req, res, count) => {
	if(count >= 100){
		res.status(500).send({
			message: 'Sorry. We were unable to generate a random shortURL. Please enter one manually or try again.'
		})
	} else {
		req.body.shortURL = randomStringGen.randomStringGenerator()
		databaseAccess.getExistingURL(req.body.shortURL).exec(function (err, matchedItem) {
			if (err) {
				console.error(err)
				res.status(500).send({
					message: 'Something when wrong with the database.'
				})
				return
			} else {
				if(matchedItem === undefined || matchedItem === null){
					res.status(200).send({
						message: `Success! Your URL has been created: ${req.body.shortURL}`,
						shortURL: req.body.shortURL,
						originalURL: req.body.originalURL
					})
					databaseAccess.save(req.body)
				} else {
					generateRandomShortURL(req, count++)
				}
			}
		})
	}
}

module.exports = {
	postForm(req, res) {
		if(validation.dirtyOriginalURLCheck(req, res)){
			validation.fetchOriginalURLCheck(req)
				.then(response => {
					if(req.body.shortURL === undefined || req.body.shortURL === null || req.body.shortURL === ''){
						generateRandomShortURL(req, res, 0)
					} else if(validation.checkShortURLLength(req, res)){
						databaseAccess.getExistingURL(req.body.shortURL).exec(function (err, matchedItem) {
							if (err) {
								console.error(err)
								res.status(500).send({
									message: 'Something when wrong with the database.'
								})
								return
							} else {
								if(matchedItem === undefined || matchedItem === null){
									res.status(200).send({
										message: `Success! Your URL has been created: "${req.body.shortURL}".`,
										shortURL: req.body.shortURL,
										originalURL: req.body.originalURL
									})
									databaseAccess.save(req.body)
								} else {
									res.status(400).send({
										message: `Sorry. Short URL "${req.body.shortURL}" is already in the database redirecting to "${matchedItem.originalURL}". Please try another.`
									})
								}
							}
						})
					}
				})
				.catch(error => {
					res.status(400).send({
						message: `Sorry. The URL "${req.body.originalURL}" does not go anywhere.`
					})
				})
		}
		//}
	},
    doRedirect(req, res) {
        const shortcode = req.params.shortcode

        databaseAccess.getExistingURL(shortcode).exec(function (err, matchedItem) {
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
