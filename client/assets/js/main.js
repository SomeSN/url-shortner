let urls = []


const urlsJSON = localStorage.getItem('urls')

  if (urlsJSON !== null) {
    urls = JSON.parse(urlsJSON)
  }


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
document.querySelector('#form').addEventListener('submit', function (e) {
  //listen to submit --> when the form is submited --> do something
  e.preventDefault()
  urls.push({ // push the data onto the array
    shortenedURL: e.target.elements.shortenedURL.value
  })

  localStorage.setItem('urls', JSON.stringify(urls))

  renderurls(urls)
  e.target.elements.originalURL.value = ''
  e.target.elements.shortenedURL.value = ''

  })
