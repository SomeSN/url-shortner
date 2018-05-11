const serverURL = 'http://localhost:3000/'

/* Function which posts the request to shorten the URL to the server. Called when the button is pressed. */
const shortenURL = (server) => {
    const data = {
        'originalURL': 'http://google.com',
        'shortURL': 'some code'
    };
    console.log('Saving the following object to the server:', data);
	/* Fetches a response from the given server. */
    fetch(data)
	.then(function(response) {
        return response.json()
    }).then(function(reponse) {
		console.log(reponse)
    })
}

/* Makes this run when we hit the 'SHORTEN URL' button */


const createPost = () => {
  const data = {
      'originalURL': 'http://google.com',
      'shortURL': 'some code'
  }
    console.log('Saving the following object to the server:', data);

    fetch('http://localhost:3000/posts/', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        // document.querySelector('#name').value = ''
        // document.querySelector('#url').value = ''
        // document.querySelector('.modal').classList.toggle('show')
        getPosts()
    })
}

document.querySelector('#create-shorten-url').onclick = createPost()
