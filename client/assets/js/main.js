/* Function which posts the request to shorten the URL to the server. Called when the button is pressed. */
const shortenURL = () => {
    const data = {
        'originalURL': document.querySelector('#originalURL').value,
        'shortURL': document.querySelector('#shortURL').value
    };
    console.log('Saving the following object to the server:', data);
	/* Fetches a response from the given server. */
  fetch('https://morning-waters-83709.herokuapp.com/', {
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
