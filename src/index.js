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

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

localStorage.setItem('Theme', JSON.stringify(Theme));
//повесиьь слушателя на переклучатель чтбо он добавлял темы в локал сторедж
//и добавить стили при работе с переключателем на стили