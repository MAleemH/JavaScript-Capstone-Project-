import fetchData from "./fetchData.js";

export const getSingleData = async (id) => {
  const getData = await fetchData();
  const singleData = getData.find((data) => data.id === parseInt(id));
  console.log(singleData);

  const popup = document.querySelector(".popup");
  const popupContent = document.querySelector(".popup-content");
  const popupClose = document.querySelector(".popup-close");

  popupContent.innerHTML = 
  `<img src='${singleData.image.original}' alt='Thumbnail' class='img-card' >
      <div class='popup-info'>
          <h1>${singleData?.name}</h1>
          <p><b>Genre(s):</b> ${singleData?.genres}</p>
          <p class="summary"><b>Summary:</b> ${singleData?.summary}</p>
      </div>
  `;
  popupClose.addEventListener("click", () => {
    popup.classList.remove("show");
  });

  popup.append(popupContent, popupClose);
};
