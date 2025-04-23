const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10";
const buttonContainer = document.getElementById("button-container");

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((cat, index) => {
      const button = document.createElement("button");
      const prefixes = [
        "Cat",
        "Kitty",
        "Kat",
        "Cute",
        "Cutie",
        "Paw",
        "Meow",
        "Purr",
        "Whiskers",
      ];
      const randomPrefix =
        prefixes[Math.floor(Math.random() * prefixes.length)];
      button.textContent = `${randomPrefix} ${index + 1}`;
      button.addEventListener("click", () => {
        window.location.href = `/display?url=${cat.url}`;
      });
      buttonContainer.appendChild(button);
    });
  })
  .catch((error) => {
    console.error("Error fetching cat images:", error);
  });
