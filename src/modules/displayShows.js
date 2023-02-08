import fetchData from './fetchData.js';
import getSingleData from './popup.js';

const showList = document.querySelector('.shows-list');

const displayAllShows = async () => {
  const getData = await fetchData();
  showList.innerHTML = '';
  getData.forEach((data) => {
    showList.innerHTML += `
      <div class='card'>
        <img src='${data.image.medium}' alt='Thumbnail' >
        <div class='title-like'>
          <p class='show-name'>${data.name}</p>
          <p class='heart-button'></p>
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
};

export default displayAllShows;
