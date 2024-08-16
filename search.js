const imageElement = document.getElementById('cat-image');
const urlParams = new URLSearchParams(window.location.search);
const imageUrl = urlParams.get('url');

// Function to download and display the image
function downloadAndDisplayImage(url) {
    const img = new Image();

    img.onload = function() {
        // Image has finished loading
        imageElement.src = url; // Set the src of the image element
        imageElement.style.display = 'block'; // Show the image
    };
    img.src = url; // Start downloading the image
}

// Check if the image URL is provided
if (imageUrl) {
    downloadAndDisplayImage(imageUrl);
}
