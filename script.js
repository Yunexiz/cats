const apiUrl = 'https://api.thecatapi.com/v1/images/search';

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const imageUrl = data[0].url;
    const imageElement = document.createElement('img');
    imageElement.src = imageUrl;

    const imageContainer = document.getElementById('cat-pics');
    imageContainer.appendChild(imageElement);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
