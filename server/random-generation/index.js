module.exports = {
	/* Returns a random character from A-Z, a-z or 0-9. */
	randomCharGenerator: () => {
		const availableChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
		let generatedCharacter = Math.floor(Math.random()*(availableChars.length))
		return availableChars.charAt(generatedCharacter)
	},

	/* Returns a random string of 7 characters. */
	randomStringGenerator: () => {
		let randomString = ''
		for(let i = 0; i < 7; i++){
			randomString += module.exports.randomCharGenerator()
		}
		return randomString
	}
}