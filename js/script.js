const searchForm = document.querySelector(".search-form");
const cardItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

// !buttons
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");
searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.toggle("active");
    }
  });
});

cartBtn.addEventListener("click", function () {
  cardItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cardItem)
    ) {
      cardItem.classList.toggle("active");
    }
  });
});
menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.toggle("active");
    }
  });
});
