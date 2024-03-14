let overFlow = document.querySelector("#overflow");
overFlow.scrollTo(overFlow.offsetWidth / 3 + 10, 0);

let nav = document.querySelector("header .nav");
let headerParent = document.querySelector("header");
let header = document.querySelector("header .container");
let overlay = document.querySelector(".overlay");

overlay.style.top = `${window.innerHeight}px`;
overlay.style.height = `${
  window.innerHeight - headerParent.offsetHeight + 10
}px`;

let menu = document.createElement("img");
menu.className = "menu-icon";
menu.setAttribute("src", "images/icon-hamburger.svg");

function myFunction(x) {
  if (x.matches) {
    nav.style.display = "none";
    header.appendChild(menu);
    menu.addEventListener("click", () => {
      if (menu.classList.contains("active")) {
        resetNav();
      } else {
        openNav();
      }
    });
  } else {
    menu.remove();
    resetNav();
    nav.style.display = "flex";
  }
}

var x = window.matchMedia("(max-width: 767px)");

myFunction(x);

x.addEventListener("change", function () {
  myFunction(x);
});

function resetNav() {
  menu.setAttribute("src", "images/icon-hamburger.svg");
  menu.classList.remove("active");
  document.body.style.overflowY = "auto";
  overlay.style.display = "none";
  nav.style.display = "none";
}

function openNav() {
  menu.setAttribute("src", "images/icon-close.svg");
  menu.classList.add("active");
  overlay.style.display = "block";
  nav.style.display = "flex";
  document.body.style.overflowY = "hidden";
}
