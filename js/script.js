const iconBurger = document.querySelector('.header__burger');
const menuBurger = document.querySelector('.header__menu');

iconBurger.addEventListener('click', openMenu);

function openMenu(e) {
   menuBurger.classList.toggle('_active');
   iconBurger.classList.toggle('_active');
   document.body.classList.toggle('_lock');
}

const locationItem = document.querySelectorAll('.item-location');
const mapLocationItem = document.querySelectorAll('.location__map iframe');
let numOfActive = 0;

locationItem.forEach((element, index) => {
   element.addEventListener('click', () => {
      if (!element.classList.contains("_active")) {
         element.classList.add("_active");
         locationItem[numOfActive].classList.remove("_active");
         mapLocationItem[numOfActive].classList.remove("_active");

         for (let i = 0; i < mapLocationItem.length; i++) {
            if (element.dataset.value == mapLocationItem[i].dataset.value) {
               mapLocationItem[i].classList.add("_active");
               break;
            }
         }

         numOfActive = index;
      }
   });
});

