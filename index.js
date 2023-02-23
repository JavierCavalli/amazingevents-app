const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinksToggle = document.querySelector(".navbar-links-toggle");

navbarToggle.addEventListener("click", () => {
  navbarLinksToggle.classList.toggle("active");
});
