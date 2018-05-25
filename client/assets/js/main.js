/* Function which posts the request to shorten the URL to the server. Called when the button is pressed. */
const saveToServer = () => {
    const data = {
        'originalURL': document.querySelector('#originalURL').value,
        'shortURL': document.querySelector('#shortURL').value
    };
    console.log('Saving the following object to the server:', data);
	/* Fetches a response from the given server. */
  fetch('https://limitless-retreat-13103.herokuapp.com/', {
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
    const URLverification = verifyURLs()
}

document.querySelector('.create-shorten-url').onclick = shortenURL

//renderurls(urls)

//===================================
const verifyURLs = (callbackFunction) => {
    const originalURL = document.querySelector('#originalURL').value;
	if(originalURL !== '' && originalURL.length < 7){
		console.log('Too short.')
        alert('Too short.')
	} else if(originalURL.length >= 0) {
		return fetch(originalURL, { mode: 'no-cors' })
			.then(response => {
				console.log('Success! I think.')
				saveToServer()
			})
			.catch(error => {
				console.error('That URL does not exist.')
			});
	}
}
