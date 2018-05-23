/* Function which posts the request to shorten the URL to the server. Called when the button is pressed. */
const saveToServer = () => {
    const data = {
        'originalURL': document.querySelector('#originalURL').value,
        'shortURL': document.querySelector('#shortURL').value
    };
    console.log('Saving the following object to the server:', data);
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

document.querySelector('#form').addEventListener('submit', function (e) {
	//listen to submit --> when the form is submited --> do something
	e.preventDefault()
	const URLverification = verifyURLs(e)
	/* URLverification is 0 if everything is fine. */
	console.log(URLverification)
	if(URLverification === 0){
		urls.push({ // push the data onto the array
			shortenedURL: e.target.elements.shortenedURL.value
		})
		localStorage.setItem('urls', JSON.stringify(urls))

		//renderurls(urls)
	} else {
		document.querySelector('#shortened-url-lists').innerHTML = ''
		const summary = document.createElement ('h3')
		/* URLverification is 1 if the shortURL isn't at least 7 characters long. */
		if(URLverification === 1){
			summary.textContent = 'Your short URL must be at least 7 characters long.'
	/* URLverification is 2 if the originalURL doesn't exist. */
		} else if(URLverification === 2){
			summary.textContent = 'Unfortunately that URL does not exist.'
		}
		document.querySelector('#shortened-url-lists').appendChild(summary)
	}
	e.target.elements.originalURL.value = ''
	e.target.elements.shortenedURL.value = ''
})
