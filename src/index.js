import './style.css';
import displayAllShows from './modules/displayShows';
import addNewLike from './modules/addNewLike';

displayAllShows();

// add new like
window.addEventListener('click', async (e) => {
  const likeB = e.target;
  if (likeB.classList.contains('likeButton')) {
    const showId = likeB.getAttribute('data-id');
    const intIdOfShow = parseInt(showId, 10);
    await addNewLike(intIdOfShow);
    window.location.reload();
  }
});