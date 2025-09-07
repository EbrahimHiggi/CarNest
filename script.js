// toggle icon navbar
let menu = document.querySelector("#menu-but");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

// login popup
document.querySelector("#login-but").onclick = () => {
  document.querySelector(".login-container").classList.toggle("active");
};
document.querySelector("#close-login").onclick = () => {
  document.querySelector(".login-container").classList.remove("active");
};

// scroll sections + active nav links
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  let header = document.querySelector(".header");

  // sticky header
  header.classList.toggle("active", window.scrollY > 0);

  // remove toggle menu on scroll
  menu.classList.remove("fa-times");
  navbar.classList.remove("active");

  // highlight nav links on scroll
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

// add active on reload
window.onload = () => {
  let header = document.querySelector(".header");
  header.classList.toggle("active", window.scrollY > 0);
};

// parallax effect
document.querySelector(".home").onmousemove = (e) => {
  document.querySelectorAll(".home-effect").forEach((elm) => {
    let speed = elm.getAttribute("data-speed");
    let x = (window.innerWidth - e.pageX * speed) / 90;
    let y = (window.innerHeight - e.pageY * speed) / 90;
    elm.style.transform = `translateX(${y}px) translateY(${x}px)`;
  });
};
document.querySelector(".home").onmouseleave = () => {
  document.querySelectorAll(".home-effect").forEach((elm) => {
    elm.style.transform = `translateX(0px) translateY(0px)`;
  });
};

// swiper sliders
var swiper = new Swiper(".vehiles-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabcursor: true,
  centeredSlides: true,
  autoplay: { delay: 9500, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  breakpoints: {
    0: { slidesPerView: 1 },
    770: { slidesPerView: 2 },
    990: { slidesPerView: 3 },
  },
});

var swiper = new Swiper(".featured-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabcursor: true,
  centeredSlides: true,
  autoplay: { delay: 9500, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  breakpoints: {
    0: { slidesPerView: 1 },
    770: { slidesPerView: 2 },
    991: { slidesPerView: 3 },
  },
});

var swiper = new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  grabcursor: true,
  centeredSlides: true,
  autoplay: { delay: 9500, disableOnInteraction: false },
  pagination: { el: ".swiper-pagination", clickable: true },
  breakpoints: {
    0: { slidesPerView: 1 },
    770: { slidesPerView: 2 },
    991: { slidesPerView: 3 },
  },
});
