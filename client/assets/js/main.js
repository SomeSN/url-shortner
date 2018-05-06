const serverURL = 'http://localhost:3000/'

/* Function which posts the request to shorten the URL to the server. Called when the button is pressed. */
const shortenURL = (server) => {
    const data = {
        'url': 'http://google.com',
        'code': 'some code'
    };
    console.log('Saving the following object to the server:', data);
	/* Fetches a response from the given server. */
    fetch(serverURL, data)
	.then(function(response) {
        return response.json();
    }).then(function(reponse) {
		console.log(reponse)
    })
}

/* Makes this run when we hit the 'SHORTEN URL' button */
document.querySelector('.button-shorten-url').onclick = shortenURL
