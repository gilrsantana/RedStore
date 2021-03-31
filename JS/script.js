
// ---------- Side Menu ---------- //
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

// ---------- Account ---------- //
if (document.querySelector('#Account')){
  var btnLogin = document.querySelector('.t-login');
  var btnRegister = document.querySelector('.t-register');
  var boxLogin = document.querySelector('.account-box-login');
  var boxRegister = document.querySelector('.account-box-register');
  var indicator = document.getElementById('Indicator');

  boxLogin.style.transition = '1s';
  boxRegister.style.transition = '1s';
  indicator.style.transition = '1s';
  boxLogin.style.left = '0';
  boxRegister.style.left = '-350px';
  indicator.style.transform = 'translateX(25px)'

  btnLogin.onclick = function() {
    boxLogin.style.left = '0';
    boxRegister.style.left = '-350px';
    indicator.style.transform = 'translateX(25px)'
  }

  btnRegister.onclick = function() {
    boxLogin.style.left = '350px';
    boxRegister.style.left = '0';
    indicator.style.transform = 'translateX(165px)'
  }
}
