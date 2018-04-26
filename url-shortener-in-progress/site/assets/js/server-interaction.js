const serverURL = 'http:\\localhost:9099\'

/* Gets existing shortened URLs and displays them. */
const getExistingURLs = (serverURL) => {
    container.innerHTML = ''
    fetch(serverURL).then(response =>{
			return response.json();
		}
	).then(showExistingURLs)
}

/* Creates the HTML to display the existing shortened URLs. */
const showExistingURLs = (posts) => {
    console.log(posts)
    const urlList = document.getElementById('urlList')
	/* Takes the posts grabbed using the getPosts function and adds HTML to the html file to make it visible. Each post will get it's own entry. */
    posts.forEach(post => {
/* Preparation for an additional potential feature allowing you to name your shortened URL.
            <h2>${post.name}</h2>
*/
		let template = `
			<a href="${post.shortURL}">${shortURL}</a>
			<a href="${post.originalRL}">${shortURL}</a>`
			urlList.innerHTML += template;
	})
}

/* Function which posts the request to shorten the URL to the server. Called when the button is pressed. */
const shortenURL = (serverURL) => {
	/* Data to be turned into a json regarding the URL */
    const urlData = {
/* Preparation for an additional potential feature allowing you to name your shortened URL.
        name: document.querySelector('#name').value,
*/
        shortURL: document.querySelector('#shortURL').value,
        originalURL: document.querySelector('#originalURL').value
    }
    console.log('Saving the following object to the server:', urlData);
	/* Fetches a response from the given server. */
    fetch(serverURL , {
		method: 'POST',
		body: JSON.stringify(urlData),
		headers: {
			"Content-Type": "application/json"
		}
    }).then(function(response) {
        return response.json();
    }).then(function(urlData) {
/* Preparation for an additional potential feature allowing you to name your shortened URL.
        document.querySelector('#name').value = ''
*/
        document.querySelector('#shortURL').value = ''
        document.querySelector('#originalURL').value = ''
//        getExistingURLs(serverURL)
    })
}
/* Makes this run when we hit the 'SHORTEN URL' button */
document.querySelector('button-shorten-url').onclick = shortenURL(serverURL)