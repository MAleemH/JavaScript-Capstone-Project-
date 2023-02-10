import './style.css';
import displayAllShows from './modules/displayShows.js';
import addNewLike from './modules/addNewLike.js';

displayAllShows();

// add new like
window.addEventListener('click', async (e) => {
  const likeB = e.target;
  if (likeB.classList.contains('likeButton')) {
    const showId = likeB.getAttribute('data-id');
    await addNewLike(showId);
    window.location.reload();
  }
});