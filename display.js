const imageElement = document.getElementById("dog-image");

const urlParams = new URLSearchParams(window.location.search);
const imageUrl = urlParams.get("url");
imageElement.src = imageUrl;
