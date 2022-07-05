const offset = 100;
const scrollUp = document.querySelector(".scroll-up");
const scrollUpSvgPath = document.querySelector(".scroll-up__svg-path");
const pathLength = scrollUpSvgPath.getTotalLength();

const getTop = () => window.pageYoffset || document.documentElement.scrollTop;

scrollUpSvgPath.style.strokeDasharray = "${pathLength} ${pathLength}";
scrollUpSvgPath.style.transition = "stroke-dashoffset 20ms";

window.addEventListener("scroll", () => {
  if (getTop() > offset) {
    scrollUp.classList.add("scroll-up--active");
  } else {
    scrollUp.classList.remove("scroll-up--active");
  }
});

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Burger

(function () {
  const burgerItem = document.querySelector(".burger");
  const menu = document.querySelector(".header_container-menu");
  const menuCloseItem = document.querySelector(".header__nav-close");
  const aboutCloseItem = document.querySelectorAll(
    ".header_container-item-link"
  );
  burgerItem.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  menuCloseItem.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
  aboutCloseItem.forEach((b) =>
    b.addEventListener("click", () => {
      menu.classList.remove("header__nav_active");
    })
  );
})();
