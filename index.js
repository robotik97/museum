// Hamburger Menu
const navMenu = () => {
  const hamburger = document.querySelector(".hamburger");
  const links = document.querySelector(".links");
  const navLinks = document.querySelectorAll(".links Li");

  // Toggle nav
  hamburger.onclick = function () {
    links.classList.toggle("link-active");
    //Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `hamburgerFade 0.5s ease forwards ${
          index / 7 + 0.5
        }s`;
      }
    });
    //Hamburger animation
    hamburger.classList.toggle("toggle");
  };
};
navMenu();

// Slider
// start of image offset from the left edge
let offset = 0; 
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".cursor-left").addEventListener("click", function () {
  offset += 1000;
  if (offset > 4000) {
    offset = 0;
  }
  sliderLine.style.left = `${-offset}px`;
});
document.querySelector(".cursor-right").addEventListener("click", function () {
  offset -= 1000;
  if (offset < 0) {
    offset = 4000;
  }
  sliderLine.style.left = `${-offset}px`;
});
