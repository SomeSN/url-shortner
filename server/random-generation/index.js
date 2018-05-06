module.exports = {
	/* Returns a random number between two given numbers. The lower number is included in the range. The higher number is not.
	-If no number is given, it returns a number between 0 and 1 (it's identical to math.random in this case, except way less efficient).
	-If only a single number is given, it returns a random number between 0 and that number (it cannot return that number).
	-It works as above even if things other than numbers are given (if you give it two non numbers, it will act as if you didn't give it anything. If you give it one number and one non number, it will act as if you gave it one number) and it works with ranges that include both negative and positive values.
	-Returns an intenger if whole is true, decimal otherwise (so it will default to decimals).
	-The two numbers can be given in any order. */
	randomNumberGenerator: (valueOne, valueTwo, whole) => {
		/* Makes sure valueOne and valueTwo are both numbers. */
		if(typeof valueOne !== 'number' && typeof valueTwo !== 'number'){
			valueOne = 0
			valueTwo = 1
		} else {
			if(typeof valueOne !== 'number'){
				valueOne = 0
			} else if(typeof valueTwo !== 'number'){
				valueTwo = 0
			}
		}
		/* Determines which number is higher. Remember that the higher number is a limit and will NOT be included in the range. */
		let min = 0
		let limit = 0
		if(valueOne < valueTwo){
			min = valueOne
			limit = valueTwo
		} else {
			min = valueTwo
			limit = valueOne
		}
		/* Takes into account negative ranges. */
		let negativeAdjustment = 0
		if(min < 0){
			negativeAdjustment = -1*min
		}
		/* Generates the random number. */
		let randomNumber = Math.random()*(limit-min)
		if(whole === true){
			randomNumber = Math.floor(randomNumber)
		}
		return randomNumber - negativeAdjustment
	}

	/* Shorthand for the above function. */
	RNG: (valueOne, valueTwo, whole) => {
		return this.randomNumberGenerator(valueOne, valueTwo, whole)
	}

	/* Returns a random character out of a given string of characters. If a non string or no value at all is given, it defaults to returning a character from A-Z, a-z or 0-9. */
	randomCharGenerator: (availableChars) => {
		if(typeof availableChars !== 'string'){
			availableChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
		}
		let generatedCharacter = this.randomNumberGenerator(availableChars.length)
		return availableChars.charAt(generatedCharacter)
	}

	/* Returns a random string of characters up to the given string length taken from the string of available characters. Any decimals in the string length will be ignored and the default value is 7. Default available characters are A-Z, a-z and 0-9. */
	randomStringGenerator: (stringLength, availableChars) => {
		if(typeof stringLength !== 'number'){
			stringLength = 7
		} else {
			stringLength = Math.floor(stringLength)
		}
		let randomString = ''
		for(let i = 0; i < stringLength; i++){
			randomString += this.randomCharGenerator(availableChars)
		}
		return randomString
	}
}