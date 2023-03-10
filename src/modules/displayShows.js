import fetchData from './fetchData';
import getLikes from './getLikes';
import getSingleData from './popup';
import domCounter from './domCounter';

const showList = document.querySelector('.shows-list');

const displayAllShows = async () => {
  const getData = await fetchData();
  const getLikesData = await getLikes();
  showList.innerHTML = '';
  getData.forEach((data) => {
    const likes = getLikesData.filter((like) => like.item_id === data.id);
    showList.innerHTML += `
      <div class='card'>
        <img src='${data.image.medium}' alt='Thumbnail' >
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

  const popup = document.querySelector('.popup');
  const btnComment = document.querySelectorAll('.btn-comment');
  Array.from(btnComment)?.forEach((button) => {
    button.addEventListener('click', () => {
      const { id } = button.dataset;
      getSingleData(id);
      popup.classList.add('show');
    });
  });

  // no of shows
  const countShows = domCounter();
  const navItem = document.querySelector('.navItem');
  navItem.innerHTML += `Shows (${countShows})`;
};

export default displayAllShows;
