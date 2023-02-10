/* eslint-disable eqeqeq */
// import addNewLike from './addNewLike.js';
import fetchData from './fetchData.js';
import getLikes from './getLikes.js';
import getSingleData from './popup.js';

const showList = document.querySelector('.shows-list');

const displayAllShows = async () => {
  // getting data for shows
  const getData = await fetchData();
  // getting data for likes
  const getLikesData = await getLikes();
  showList.innerHTML = '';
  getData.forEach((data) => {
    // getting likes data for specific show
    const likes = getLikesData.filter((like) => like.item_id == data.id);
    // displaying data
    showList.innerHTML += `
      <div class='card'>
        <img src='${data.image.medium}' alt='Thumbnail'>
        <div class='title-like'>
          <p class='show-name'>${data.name}</p>
          <div class='display-likes'>
            <i class='fa-regular fa-heart likeButton' id='likeButton' data-id='${data.id}'></i>
            <p class='no-of-likes'>${likes.length > 0 ? likes[0].likes : 0} likes</p>
          </div>
        </div>
        <button type='button' class='buttons btn-comment' data-id=${data.id}>Comments</button>
        <button type='button' class='buttons'>Reservations</button>
      </div>
    `;
  });

  // show popup window
  const popup = document.querySelector('.popup');
  const btnComment = document.querySelectorAll('.btn-comment');
  Array.from(btnComment)?.forEach((button) => {
    button.addEventListener('click', () => {
      const { id } = button.dataset;
      getSingleData(id);
      popup.classList.add('show');
    });
  });
};

export default displayAllShows;
