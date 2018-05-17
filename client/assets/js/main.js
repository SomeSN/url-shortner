/* Function which posts the request to shorten the URL to the server. Called when the button is pressed. */
const shortenURL = () => {
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

document.querySelector('.create-shorten-url').onclick = shortenURL

renderurls(urls)

//===================================
const verifyURLs = (e) => {
	if(e.target.elements.shortenedURL.value !== '' && e.target.elements.shortenedURL.value.length < 7){
		console.log('Too short.')
		return 1 //1 means the short URL is too short.
	} else if(e.target.elements.originalURL.value.length >= 0) {
		return fetch(e.target.elements.originalURL.value, { mode: 'no-cors' })
			.then(response => {
				console.log('Success! I think.')
				return 0 //0 means everything is fine.
			})
			.catch(error => {
				console.log('That URL does not exist.')
				return 2 //2 means the original URL doesn't exist.
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

		renderurls(urls)
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
