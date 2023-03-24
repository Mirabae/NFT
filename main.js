console.log("Test");
const hamBurger = document.querySelector(".ham-btn");
const navLink = document.querySelector(".nav-links");

hamBurger.addEventListener("click", () => {
  navLink.classList.toggle("hide");
});