let urls = []

const serverURL = 'http://localhost:3000/'

/* Function which posts the request to shorten the URL to the server. Called when the button is pressed. */
const shortenURL = (server) => {
    const data = {
        'originalURL': document.querySelector('#originalURL').value,
        'shortURL': document.querySelector('#shortURL').value
    };
    console.log('Saving the following object to the server:', data);
	/* Fetches a response from the given server. */
  fetch('http://localhost:3000/urls/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {"Content-Type": "application/json"}
  }).then(function(response) {
      return response.json();
  }).then(function(data) {
      document.querySelector('#originalURL').value = ''
      document.querySelector('#shortURL').value = ''

      console.log(data)

      document.getElementById('shortened-url-lists').innerHTML = data.message
  })
}
document.querySelector('.create-shorten-url').onclick = shortenURL

const urlsJSON = localStorage.getItem('urls')

const renderurls = function (urls) {

  document.querySelector('#shortened-url-lists').innerHTML = ''


  const summary = document.createElement ('h3')
    summary.textContent = 'Shortened version of our favorite URL'
    document.querySelector('#shortened-url-lists').appendChild(summary)

  urls.forEach(function (url) {
    const newURL = document.createElement('p')
    newURL.textContent = url.shortenedURL
    document.querySelector('#shortened-url-lists').appendChild(newURL)
  })
}

renderurls(urls)

//===================================
// document.querySelector('#form').addEventListener('submit', function (e) {
//   //listen to submit --> when the form is submited --> do something
//   e.preventDefault()
//   urls.push({ // push the data onto the array
//     shortenedURL: e.target.elements.shortenedURL.value
//   })
//
//   fetch('http://localhost:3000/posts/').then(response => {
//       return response.json()
//     })
//
//   renderurls(urls)
//   e.target.elements.originalURL.value = ''
//   e.target.elements.shortenedURL.value = ''
//
//   })
