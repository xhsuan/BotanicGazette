//////////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

//////////////////////////////////////////////////////////////
// mobile navigation
const searchBtn = document.querySelector(".search-btn");
const closeBtn = document.querySelector(".close-btn");
const searchBox = document.querySelector(".search-box");
const mainNavList = document.querySelector(".main-nav-list");

const navBtnEl = document.querySelector(".mobile-nav-btn");
const headerEl = document.querySelector("header");

searchBtn.addEventListener("click", function () {
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
  closeBtn.classList.add("active");
  navBtnEl.classList.add("close");
  mainNavList.classList.remove("open");
});

closeBtn.addEventListener("click", function () {
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
  closeBtn.classList.remove("active");
  navBtnEl.classList.remove("close");
});

navBtnEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
  closeBtn.classList.remove("active");
});

//////////////////////////////////////////////////////////////
//smooth scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    //     e.preventDefault();
    //     const href = link.getAttribute("href");
    //     // console.log(href);

    //     // Scroll back to top:
    //     if (href === "#");
    //     window.scrollTo({
    //       top: 0,
    //       behavior: "smooth",
    //     });

    //     if (href !== "#" && href.startsWith("#")) {
    //       const sectionEL = document.querySelector(href);
    //       sectionEL.scrollIntoView({ behavior: "smooth" });
    //     }

    // Close mobile navigation:
    if (link.classList.contains("main-nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});

//////////////////////////////////////////////////////////////
//Login
const loginWrap = document.querySelector(".login-wrap");
const loginLink = document.querySelector(".login-link");
const registerLink = document.querySelector(".register-link");
const loginPopup = document.querySelector(".main-nav-btn");
const loginClose = document.querySelector(".login-close-icon");
const subscribeBtn = document.querySelector(".subscribe-btn");

registerLink.addEventListener("click", () => {
  loginWrap.classList.add("active");
});

loginLink.addEventListener("click", () => {
  loginWrap.classList.remove("active");
});

loginPopup.addEventListener("click", () => {
  loginWrap.classList.add("active-popup");
});

loginClose.addEventListener("click", () => {
  loginWrap.classList.remove("active-popup");
  loginWrap.classList.remove("active");
});

subscribeBtn.addEventListener("click", () => {
  loginWrap.classList.add("active-popup");
});
