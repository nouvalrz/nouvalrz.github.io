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
  relativeInput: true,
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


gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("#experience .experience-item").forEach((section) => {
  gsap.from(section, {
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
});


const cards = document.querySelectorAll(".tilt-card");

if (cards.length != 0) {
  cards.forEach((card) => {
    const content = card.querySelector(".tilt-card-content")

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const percentX = (x - centerX) / centerX;
      const percentY = -((y - centerY) / centerY);

      card.style.transform = `perspective(1000px) rotateY(${percentX * 10}deg) rotateX(${percentY * 10}deg)`;
      content.style.transform = `translateZ(50px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
      content.style.transform = 'translateZ(0px)';
      // glow.style.opacity = '0';
    });
  })
}


const userAgent = navigator.userAgent.toLowerCase();
const platform = navigator.platform.toLowerCase();
const hoverBadge = document.querySelector("#hover-badge");

if (/android/.test(userAgent)) {
  hoverBadge.querySelector("p").innerText = "👋 tilt me"
} else if (/iphone|ipad|ipod/.test(userAgent)) {
  hoverBadge.style.display = "none";
} 
