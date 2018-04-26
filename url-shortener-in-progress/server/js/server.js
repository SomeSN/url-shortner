const express = require('express')
const app = express()
const port = 9099

app.get('/', (request, response) => {
	response.send('You did a thing!')
})

app.listen(port, (err) => {
	if(err){
		return console.log('Doh! Something went wrong!')
	}
	console.log(`server is listening on ${port}`)
})