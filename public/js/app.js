const menuBtn = document.getElementsByClassName('menu-btn');
const mobileMenu = document.getElementsByClassName('mobile-menu');

const clickedMenuBtn = function() {
  mobileMenu[0].classList.toggle('active');
}

menuBtn[0].addEventListener("click", clickedMenuBtn);

console.log(menuBtn[0]);
