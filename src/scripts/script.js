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

let profileParallax = document.querySelector("#profile-parallax");
let parallaxInstance = new Parallax(profileParallax, {
  relativeInput: true, // Efek berdasarkan pergerakan mouse
  clipRelativeInput: true
});

gsap.registerPlugin(ScrollTrigger);

const splitTypes = document.querySelectorAll(".reveal-type")
splitTypes.forEach((char, i) => {
  const text = new SplitType(char, {
    types: "words"
  });

  gsap.from(text.words, {
    scrollTrigger: {
      trigger: char,
      start: 'top 80%',
      end: 'top 40%',
      scrub: true,
      markers: false,
    },
    opacity: 0.2,
    stagger: 0.1
  })

})