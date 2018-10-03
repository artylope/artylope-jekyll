document.getElementById("menu-icon").addEventListener("click", toggleMenu);

function toggleMenu() {
 var menuIcon = document.getElementById("menu-icon").classList;
  if (menuIcon.contains("toggled")) {
   menuIcon.remove("toggled");
   } else {
   menuIcon.add("toggled");
   }
  var mainMenu = document.getElementById("main-menu").classList;
  if (mainMenu.contains("toggled")) {
   mainMenu.remove("toggled");
   } else {
   mainMenu.add("toggled");
   }
}
