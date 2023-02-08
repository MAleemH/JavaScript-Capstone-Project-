import fetchData from './fetchData.js';

const showList = document.querySelector('.shows-list');

const displayAllShows = async () => {
  const getData = await fetchData();
  // console.log(getData);
  showList.innerHTML = '';
  getData.forEach((data) => {
    showList.innerHTML += `
      <div class='card'>
        <img src='${data.image.medium}' alt='Thumbnail' >
        <div class='title-like'>
          <p class='show-name'>${data.name}</p>
          <i class="fa-regular fa-heart"></i>
        </div>
        <button type='button' class='buttons'>Comments</button>
        <button type='button' class='buttons'>Reservations</button>
      </div>
    `;
  });
};

export default displayAllShows;