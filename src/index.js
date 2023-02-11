import './style.css';
import displayAllShows from './modules/displayShows';
import addNewLike from './modules/addNewLike';

displayAllShows();

// add new like
window.addEventListener('click', async (e) => {
  const likeB = e.target;
  if (likeB.classList.contains('likeButton')) {
    const showId = likeB.getAttribute('data-id');
    // console.log(showId);
    await addNewLike(showId);
    // window.location.reload();
  }
});