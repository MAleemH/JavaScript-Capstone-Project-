import './style.css';
import displayAllShows from './modules/displayShows.js';

window.addEventListener('load', () => {
  displayAllShows();
});

// const button = document.querySelector('.heart-button');

// button.addEventListener('click', () => {
//   if (button.classList.contains('liked')) {
//     button.classList.remove('liked');
//   } else {
//     button.classList.add('liked');
//   }
// });