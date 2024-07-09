const btnMenu = document.getElementById("btn-menu"),
  menu = document.getElementById("nav-list-mobile");

btnMenu.addEventListener("click", function () {
  menu.classList.add("opening-menu");
});

menu.addEventListener("click", function () {
  menu.style.transition = ".3s";
  menu.classList.remove("opening-menu");
});
