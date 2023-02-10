import updateComment from './comments';
import fetchData from './fetchData';

const getSingleData = async (id) => {
  const getData = await fetchData();
  const singleData = getData.find((data) => data.id === parseInt(id, 10));

  const popup = document.querySelector('.popup');
  const popupContent = document.querySelector('.popup-content');
  const popupClose = document.querySelector('.popup-close');

  popupContent.innerHTML = `<img src='${singleData.image.original}' alt='Thumbnail' class='img-card' >
      <div class='popup-info'>
          <h1>${singleData?.name}</h1>
          <p><b>Genre(s):</b> ${singleData?.genres}</p>
          <p class="summary"><b>Summary:</b> ${singleData?.summary}</p>
          <div class="comments"></div>
      </div>
  `;
  popupClose.addEventListener('click', () => {
    popup.classList.remove('show');
    // clear the comments
    const comments = document.querySelector('.comments');
    comments.innerHTML = '';
  });
  popup.append(popupContent, popupClose);
  updateComment(singleData?.id);
};
export default getSingleData;
