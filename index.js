const menu = document.querySelector(".menu-svg");
const close = document.querySelector(".close-svg");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
  nav.classList.add("nav-opened");
});

close.addEventListener("click", () => {
  nav.classList.remove("nav-opened");
});

/* FOR LONG IMAGES */
document.addEventListener("DOMContentLoaded", function () {
  var workShotContainers = document.querySelectorAll(".long-img");

  workShotContainers.forEach(function (container) {
    container.addEventListener("click", function () {
      this.classList.toggle("expanded");
    });
  });
});
