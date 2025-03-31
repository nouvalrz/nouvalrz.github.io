const navButton = document.querySelector("#nav-button");
const navIcon = document.querySelector("#nav-icon");
const mobileNav = document.querySelector("#mobile-nav");

if (navButton && navIcon && mobileNav) {
  navButton.addEventListener("click", () => {
    if (navIcon.classList.contains("fa-bars")) {
      navIcon.classList.remove("fa-bars");
      navIcon.classList.add("fa-xmark");
      mobileNav.classList.remove("translate-y-full");

    } else {
      navIcon.classList.remove("fa-xmark");
      navIcon.classList.add("fa-bars");
      mobileNav.classList.add("translate-y-full");
    }
  });
}

let profileParallax = document.querySelector("#profile-parallax");
let parallaxInstance = new Parallax(profileParallax, {
  relativeInput: true, // Efek berdasarkan pergerakan mouse
  clipRelativeInput: true
});