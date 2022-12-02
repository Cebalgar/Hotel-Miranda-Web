//menu hamburger movil
const menuIcon = document.getElementById("menu-burger");
const menu = document.getElementById("header-div");
const textMenu = document.getElementById("links").innerHTML;
menuIcon.addEventListener("click", () => {
  menu.classList.toggle("header-div-active");
  if (menu.classList.contains("header-div-active")) {
    menuIcon.setAttribute("src", "./assets/icons/x.svg");
    menu.innerHTML = textMenu;
  } else {
    menuIcon.setAttribute("src", "./assets/icons/menu.svg");
    menu.innerHTML = "";
  }
});
