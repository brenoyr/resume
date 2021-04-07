const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".topnav ul");
const overlay = document.querySelector(".overlay");
let scroll = false;

const toggleNavBar = function () {
  navLinks.classList.toggle("open");
  overlay.classList.toggle("hidden");
};

hamburger.addEventListener("click", toggleNavBar);
overlay.addEventListener("click", toggleNavBar);
