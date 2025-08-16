document.querySelector(".foot-panel1").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search-icon");

function performSearch() {
  const searchValue = searchInput.value.trim();
  if (searchValue) {
    alert("Searching for: " + searchValue);
  } else {
    alert("Please enter something to search!");
  }
}

searchBtn.addEventListener("click", performSearch);

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    performSearch();
  }
});

let cartCount = 0;
const cart = document.querySelector(".nav-cart");
const cartIcon = cart.querySelector("i");

cart.addEventListener("click", () => {
  cartCount++;
  cart.innerHTML = "";
  cart.appendChild(cartIcon);
  cart.insertAdjacentText("beforeend", ` Cart (${cartCount})`);
});
const panelOptions = document.querySelectorAll(".panel-ops p");
panelOptions.forEach((option) => {
  option.addEventListener("click", () => {
    panelOptions.forEach((opt) => opt.classList.remove("active-option"));
    option.classList.add("active-option");
  });
});
