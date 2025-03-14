const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "shoyu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "miso.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "tonkotsu.jpg",
  },
];

// Display ramen images in the menu
function displayRamens() {
  const menu = document.getElementById("ramen-menu");
  menu.innerHTML = "";
  ramens.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.addEventListener("click", () => showDetails(ramen));
    menu.appendChild(img);
  });
}

// Show ramen details
function showDetails(ramen) {
  document.getElementById("detail-image").src = ramen.image;
  document.getElementById("detail-name").textContent = ramen.name;
  document.getElementById("detail-restaurant").textContent = ramen.restaurant;
  document.getElementById("detail-rating").textContent = ramen.rating;
  document.getElementById("detail-comment").textContent = ramen.comment;
}

// Add new ramen from form
function addSubmitListener() {
  document
    .getElementById("new-ramen-form")
    .addEventListener("submit", (event) => {
      event.preventDefault();

      const newRamen = {
        name: event.target.name.value,
        restaurant: event.target.restaurant.value,
        image: event.target.image.value,
        rating: event.target.rating.value,
        comment: event.target.comment.value,
      };

      ramens.push(newRamen);
      displayRamens();
      event.target.reset();
    });
}

// Initialize app
function main() {
  displayRamens();
  addSubmitListener();
  showDetails(ramens[0]); // Show first ramen on load
}

document.addEventListener("DOMContentLoaded", main);
