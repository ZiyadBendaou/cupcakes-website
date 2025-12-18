const menu = document.querySelector(".svg-menu");
const close = document.querySelector(".svg-close");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelectorAll(".nav-item");

navbar.forEach((nav) => {
  nav.addEventListener("click", () => {
    sidebar.style.display = "none";
  });
});

menu.addEventListener("click", (event) => {
  event.preventDefault();
  sidebar.style.display = "flex";
});

close.addEventListener("click", (event) => {
  sidebar.style.display = "none";
});

const swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
