import { postComment } from "./addComment";
import updateComment, { addUi } from "./comments";
import fetchData from "./fetchData";

const getSingleData = async (id) => {
  const getData = await fetchData();
  const singleData = getData.find((data) => data.id === parseInt(id, 10));

  const popup = document.querySelector(".popup");
  const popupContent = document.querySelector(".popup-content");
  const popupClose = document.querySelector(".popup-close");
  popupContent.innerHTML = `<img src='${singleData.image.original}' alt='Thumbnail' class='img-card' >
      <div class='popup-info'>
          <h1>${singleData?.name}</h1>
          <p><b>Genre(s):</b> ${singleData?.genres}</p>
          <p class="summary"><b>Summary:</b> ${singleData?.summary}</p>
          <p class="commentsHTML">Comments</p>
         <h2></h2>
         <div class="comments">
          <div class="showComments"></div>
         </div>
        <section class="add-comment">
          <h1 class="addCommentHeader">Add a comment</h1>
          <form class="form">
              <div class="form-group"><input type="text"class="items" id="name" placeholder="Your name"></div>
              <div class="form-group"><textarea type="text" class="items" id="comment" placeholder="Your vision" maxlength="400"></textarea></div>
              <input type="submit" class="submit" value="Comment" id="subComment"></input>
          </form>
         </section>
      </div>
      `;

  const name = document.getElementById("name");
  const comment = document.getElementById("comment");
  const submit = document.getElementById("subComment");

  submit.addEventListener("click", async (e) => {
    e.preventDefault();

    //Add new comment
    if (name.value !== "" && comment.value !== "") {
      await postComment(singleData?.id, name.value, comment.value);
      addUi(name.value, comment.value);
      name.value = "";
      comment.value = "";
    }
    // updateComment(singleData?.id);
  });

  //Update popup and add comments
  updateComment(singleData?.id);

  //Close button
  popupClose.addEventListener("click", () => {
    popup.classList.remove("show");
    // clear the comments
    const comments = document.querySelector(".comments");
    comments.innerHTML = "";
  });

  popup.append(popupContent, popupClose);
};
export default getSingleData;
