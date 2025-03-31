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

const themeButton = document.querySelector("#theme-button");
const themeIcon = document.querySelector("#theme-icon");

if (themeButton && themeIcon) {
  themeButton.addEventListener("click", () => {
    if (document.body.classList.contains("dark")) {
      document.body.classList.remove("dark");
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    } else {
      document.body.classList.add("dark");
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    }
  })
}