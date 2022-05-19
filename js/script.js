const iconBurger = document.querySelector('.header__burger');
const menuBurger = document.querySelector('.header__menu');

iconBurger.addEventListener('click', openMenu);

function openMenu(e) {
   menuBurger.classList.toggle('_active');
   iconBurger.classList.toggle('_active');
   document.body.classList.toggle('_lock');
}