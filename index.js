const ramens = [
  {
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "shoyu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    name: "Gyukotsu Ramen",
    restaurant: "Gyu House",
    image: "gyukotsu.jpg",
    rating: 4,
    comment: "Savory and rich!",
  },
  {
    name: "Kojiro Ramen",
    restaurant: "Kojiro Noodles",
    image: "kojiro.jpg",
    rating: 4.5,
    comment: "Great balance of flavors!",
  },
  {
    name: "Naruto Ramen",
    restaurant: "Hidden Leaf Kitchen",
    image: "naruto.jpg",
    rating: 5,
    comment: "A true classic!",
  },
  {
    name: "Nirvana Ramen",
    restaurant: "Ramen Bliss",
    image: "nirvana.jpg",
    rating: 4.8,
    comment: "Absolutely amazing!",
  },
];

// Display ramen images in the menu
function displayRamens() {
  const menu = document.getElementById("ramen-menu");
  menu.innerHTML = "";
  ramens.forEach((ramen, index) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", () => showDetails(ramen, index));
    menu.appendChild(img);
  });
}

// Show ramen details
function showDetails(ramen, index) {
  document.getElementById("detail-image").src = ramen.image;
  document.getElementById("detail-name").textContent = ramen.name;
  document.getElementById("detail-restaurant").textContent = ramen.restaurant;
  document.getElementById("detail-rating").textContent = ramen.rating;
  document.getElementById("detail-comment").textContent = ramen.comment;

  const deleteButton = document.getElementById("delete-ramen");
  deleteButton.style.display = "block";
  deleteButton.onclick = () => deleteRamen(index);
}

// Delete ramen function
function deleteRamen(index) {
  ramens.splice(index, 1);
  displayRamens();
  if (ramens.length > 0) {
    showDetails(ramens[0], 0);
  } else {
    clearDetails();
  }
}

// Clear details when no ramens are left
function clearDetails() {
  document.getElementById("detail-image").src = "";
  document.getElementById("detail-name").textContent = "";
  document.getElementById("detail-restaurant").textContent = "";
  document.getElementById("detail-rating").textContent = "";
  document.getElementById("detail-comment").textContent = "";
  document.getElementById("delete-ramen").style.display = "none";
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

document.addEventListener("DOMContentLoaded", main);
// Initialize app
function main() {
  displayRamens();
  addSubmitListener();
  showDetails(ramens[0], 0); // Show first ramen on load

  const deleteButton = document.getElementById("delete-ramen");
  deleteButton.style.display = "none";

  document.getElementById("ramen-detail").addEventListener("mouseenter", () => {
    deleteButton.style.display = "block";
  });
  document.getElementById("ramen-detail").addEventListener("mouseleave", () => {
    deleteButton.style.display = "none";
  });

  deleteButton.addEventListener("click", () => {
    const currentRamenName = document.getElementById("detail-name").textContent;
    const ramenIndex = ramens.findIndex(
      (ramen) => ramen.name === currentRamenName
    );
    if (ramenIndex !== -1) {
      deleteRamen(ramenIndex);
    }
  });
}

document.addEventListener("DOMContentLoaded", main);
