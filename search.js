const imageElement = document.getElementById('cat-image');

const urlParams = new URLSearchParams(window.location.search);
const imageUrl = urlParams.get('url');
imageElement.src = imageUrl;
