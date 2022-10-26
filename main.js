import "./styles/index.scss";
import ScrollReveal from "./scrollreveal";

const navMenu = document.querySelector(".nav__menu"),
  navToggle = document.querySelector(".nav__toggle"),
  navClose = document.querySelector(".nav__close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.querySelector(".nav__menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

function scrollHeader() {
  const header = document.querySelector("#header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else {
    header.classList.remove("scroll-header");
  }
}

window.addEventListener("scroll", scrollHeader);

function scrollUp() {
  const scrollUp = document.querySelector("#scroll-up");
  if (this.scrollY >= 200) scrollUp.classList.add("show-scroll");
  else {
    scrollUp.classList.remove("show-scroll");
  }
}

window.addEventListener("scroll", scrollUp);

const sections = document.querySelectorAll(".section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

const sr = ScrollReveal({
  distance: "60px",
  duration: 2000,
  delay: 400,
  reset: true,
});

sr.reveal(`.home__header, .section__title`, { delay: 500 });
sr.reveal(`.home__footer`, { delay: 700 });
sr.reveal(`.home__img`, { delay: 900, origin: "top" });

sr.reveal(
  `.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,
  {
    origin: "top",
    interval: 100,
  }
);
sr.reveal(`.specs__data, .discount__animate`, {
  origin: "left",
  interval: 100,
});
sr.reveal(`.specs__img, .discount__img`, { origin: "right" });
sr.reveal(`.case__img`, { origin: "top" });
