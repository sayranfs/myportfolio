const btn = document.getElementById("nav-list-item-btn"),
  dark = document.getElementById("btn-dark"),
  logo = document.getElementById("nav-logo"),
  content = document.getElementById("initial-content"),
  link = document.getElementsByClassName("nav-list-item"),
  social = document.getElementsByClassName("social-medias-item"),
  header = document.querySelector("header");

const btn__mobile = document.getElementById("nav-list-item-btn-mobile"),
  dark__mobile = document.getElementById("btn-dark-mobile"),
  list__mobile = document.getElementById("btn-menu"),
  menu__mobile = document.getElementById("nav-list-mobile"),
  x__mobile = document.getElementById("menu-x"),
  link__mobile = document.getElementsByClassName("nav-list-item-mobile");

let stateMode = false;

/* Normal Version */
btn.addEventListener("click", function () {
  if (!stateMode) {
    /* Light Mode */
    header.style.background = "rgb(255, 250, 227)";
    dark.style.color = "rgb(20, 20, 20)";
    logo.src = "static/img/sayranfelix-dark.svg";
    content.style.background =
      "linear-gradient(transparent 0%, rgb(255, 250, 227) 80%)";
    content.style.color = "rgb(20, 20, 20)";

    for (let i = 0; i < link.length; i++) {
      link[i].style.color = "rgb(20, 20, 20)";
    }

    for (let i = 0; i < social.length; i++) {
      social[i].style.color = "rgb(20, 20, 20)";
      social[i].addEventListener("mouseover", function () {
        social[i].style.color = "rgb(180, 0, 0)";
      });

      social[i].addEventListener("mouseout", function () {
        social[i].style.color = "rgb(20, 20, 20)";
      });
    }

    stateMode = true;
  } else {
    /* Dark Mode */
    header.style.background = "rgb(20, 20, 20)";
    dark.style.color = "rgb(255, 250, 227)";
    logo.src = "static/img/sayranfelix.svg";
    content.style.background =
      "linear-gradient(transparent 0%, rgb(0, 0, 0) 50%)";
    content.style.color = "rgb(255, 255, 255)";

    for (let i = 0; i < link.length; i++) {
      link[i].style.color = "rgb(255, 250, 227)";
    }

    for (let i = 0; i < social.length; i++) {
      social[i].style.color = "rgb(255, 255, 255)";
      social[i].addEventListener("mouseover", function () {
        social[i].style.color = "rgb(255, 0, 0)";
      });

      social[i].addEventListener("mouseout", function () {
        social[i].style.color = "rgb(255, 255, 255)";
      });
    }

    stateMode = false;
  }
});

/* Mobile Version */
btn__mobile.addEventListener("click", function () {
  if (!stateMode) {
    /* Light Mode */
    header.style.background = "rgb(255, 250, 227)";
    dark__mobile.style.color = "rgb(180, 0, 0)";
    logo.src = "static/img/sayranfelix-dark.svg";
    content.style.background =
      "linear-gradient(transparent 0%, rgb(255, 250, 227) 80%)";
    content.style.color = "rgb(20, 20, 20)";
    list__mobile.style.color = "rgb(20, 20, 20)";
    menu__mobile.style.backgroundColor = "rgb(255, 250, 227)";
    x__mobile.style.color = "rgb(180, 0, 0)";

    for (let i = 0; i < link.length; i++) {
      link__mobile[i].style.background = "rgb(180, 0, 0)";
    }

    for (let i = 0; i < social.length; i++) {
      social[i].style.color = "rgb(20, 20, 20)";
      social[i].addEventListener("mouseover", function () {
        social[i].style.color = "rgb(255, 0, 0)";
      });

      social[i].addEventListener("mouseout", function () {
        social[i].style.color = "rgb(255, 255, 255)";
      });
    }

    stateMode = true;
  } else {
    /* Dark Mode */
    header.style.background = "rgb(20, 20, 20)";
    dark__mobile.style.color = "rgb(255, 0, 0)";
    logo.src = "static/img/sayranfelix.svg";
    content.style.background =
      "linear-gradient(transparent 0%, rgb(0, 0, 0) 50%)";
    content.style.color = "rgb(255, 255, 255)";
    list__mobile.style.color = "rgb(255, 250, 227)";
    menu__mobile.style.backgroundColor = "rgb(20, 20, 20)";
    x__mobile.style.color = "rgb(255, 0, 0)";

    for (let i = 0; i < link.length; i++) {
      link__mobile[i].style.background = "rgb(255, 0, 0)";
    }

    for (let i = 0; i < social.length; i++) {
      social[i].style.color = "rgb(255, 255, 255)";
      social[i].addEventListener("mouseover", function () {
        social[i].style.color = "rgb(255, 0, 0)";
      });

      social[i].addEventListener("mouseout", function () {
        social[i].style.color = "rgb(255, 255, 255)";
      });
    }

    stateMode = false;
  }
});

for (let i = 0; i < social.length; i++) {
  social[i].addEventListener("mouseover", function () {
    social[i].style.color = "rgb(255, 0, 0)";
  });

  social[i].addEventListener("mouseout", function () {
    social[i].style.color = "rgb(255, 255, 255)";
  });
}
