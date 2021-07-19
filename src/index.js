// ====== create cards =============
import menuFoodsTpl from '../src/template/card-food.hbs';
import menuFoods from './menu.json';

const menuContainer = document.querySelector('.js-menu');
const cardsMarkup = createFoodCardsMarkup(menuFoods);

menuContainer.innerHTML = cardsMarkup;

function createFoodCardsMarkup(menuFoods) {
  return menuFoods.map(menuFoodsTpl).join('');
}
// ==============================================

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

localStorage.setItem('Theme', JSON.stringify(Theme));
