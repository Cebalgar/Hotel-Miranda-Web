//menu hamburger movil
const btnMenu= document.getElementById("btn");
const showMenu = document.getElementById("links");
const menuX= document.getElementById("closedMenu")


const handleClick = function() {

 showMenu.classList.toggle("show");
 btnMenu.classList.toggle("remove");
 menuX.classList.toggle("show"); 
}
btnMenu.addEventListener("click", handleClick);


menuX.addEventListener("click", ()=>{

  showMenu.style.display = "none";
  menuX.style.display = "none";
  btnMenu.style.display = "block";
});


