
var nav_menu = document.getElementById('nav_menu')
var menu = document.getElementById('menu-img')

nav_menu.style.right='-151px'
nav_menu.style.transition = '0.4s'

menu.onclick = function() {
  if(nav_menu.style.right == '-151px'){
    nav_menu.style.right = '0px'
  }else {
    nav_menu.style.right = '-151px'
  }
}