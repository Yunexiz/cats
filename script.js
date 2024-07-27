fetch('https://meme-api.com/gimme/catpictures')
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.url;

    // Create a new meta tag
    const ogImageMeta = document.createElement('meta');
    ogImageMeta.property = 'og:image';
    ogImageMeta.content = imageUrl;

    // Find the existing og:image meta tag (if any)
    const existingOgImage = document.querySelector('meta[property="og:image"]');
    if (existingOgImage) {
      existingOgImage.parentNode.replaceChild(ogImageMeta, existingOgImage);
    } else {
      document.head.appendChild(ogImageMeta);
    }
  })
  .catch(error => {
    console.error('Error fetching image:', error);
  });
