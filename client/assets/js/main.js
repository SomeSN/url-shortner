/* Function which posts the request to shorten the URL to the server. Called when the button is pressed. */
let urls []
// Check for existing saved date_created



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
      })

  }

      // document.getElementById('shortened-url-lists').innerHTML = data.message
      const renderurls = (urls) => {

        document.querySelector('#shortened-url-lists').innerHTML = ''

        const summary = document.createElement ('h3')
          summary.textContent = 'Shortened version of our favorite URL'
          document.querySelector('#shortened-url-lists').appendChild(summary)

        urls.forEach( (url) => {
          const newURL = document.createElement('p')
          newURL.textContent = url.shortenedURL
          document.querySelector('#shortened-url-lists').appendChild(newURL)
        })
      }

      renderurls(urls)

//===================================
const verifyURLs = (callbackFunction) => {
    const originalURL = document.querySelector('#originalURL').value;
	if(originalURL !== '' && originalURL.length < 7){
		console.log('Too short.')
        alert('Too short.')
	} else if (originalURL !== 'http://' || originalURL !== 'https://'){
    console.log('URL is not valid: need http:// or https://')
        alert('URL is not valid: need http:// or https://')
  }else if(originalURL.length >= 0) {
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
