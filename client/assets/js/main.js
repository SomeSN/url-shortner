/* Function which posts the request to shorten the URL to the server. Called when the button is pressed. */
const postToServer = () => {
    const data = {
		'originalURL': document.querySelector('#originalURL').value,
		'shortURL': document.querySelector('#shortURL').value
	};
	console.log('Sending the following object to the server:', data);
	/* Fetches a response from the given server. */
	fetch('http://localhost:3000/', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {"Content-Type": "application/json"}
	}).then((response) => {
		return response.json() /// errrrrrror!!!???!! why why why? whats up with this json sit'
	}).then((data) => {
		document.querySelector('#originalURL').value = ''
		document.querySelector('#shortURL').value = ''
		console.log(data)
		document.getElementById('shortened-url-lists').innerHTML = data.message
	})
}

const shortenURL = () => {
    //first verify, then send to server if valid:
	const checkingShortURL = document.querySelector('#shortURL').value;
	if(checkingShortURL !== '' && checkingShortURL.length < 7){
		console.log('Shortened URL was too short. Must be at least 7 characters.')
        alert('Your shortened URL must be at least 7 characters long.')
	} else {
		postToServer()
	}
}

document.querySelector('.create-shorten-url').onclick = shortenURL

//renderurls(urls)