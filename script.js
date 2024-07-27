const apiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';
const buttonContainer = document.getElementById('button-container');

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    data.forEach((cat, index) => {
      const button = document.createElement('button');
      button.textContent = `Image ${index + 1}`;
      button.addEventListener('click', () => {
        window.location.href = `/search?url=${cat.url}`;
      });
      buttonContainer.appendChild(button);
    });
  })
  .catch(error => {
    console.error('Error fetching cat images:', error);
  });


