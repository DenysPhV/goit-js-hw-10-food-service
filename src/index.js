// ====== create cards =============
import menuFoodsTpl from './template/card-food.hbs';
import menuFoods from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = createFoodCardsMarkup(menuFoods);

menuContainer.innerHTML = cardsMarkup;

function createFoodCardsMarkup(menuFoods) {
  return menuFoods.map(menuFoodsTpl).join('');
}

// ================ switch theme ==============================
const switchControl = document.querySelector('.theme-switch__toggle');
// console.log(switchControl);
const bodyRef = document.querySelector('body');
// console.log(bodyRef);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

switchControl.addEventListener('click', () => {
  if (localStorage.getItem('theme') === Theme.DARK) {
    localStorage.removeItem('theme');
  } else {
    localStorage.setItem('theme', Theme.DARK);
  }
  addDarkClassToBody();
});

function addDarkClassToBody() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    bodyRef.classList.add(Theme.DARK);
  } else {
    bodyRef.classList.remove(Theme.DARK);
  }
}
addDarkClassToBody();
