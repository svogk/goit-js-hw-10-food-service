import itemTemplate from '../template/item.hbs';
import recipes from '../menu.json';

const menuRef = document.querySelector('.js-menu');

const markup = itemTemplate(recipes);
menuRef.insertAdjacentHTML('beforeend', markup);