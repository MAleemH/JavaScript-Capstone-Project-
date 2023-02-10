import commentsData from "./fetchComments.js";

const updateComment = async (id) => {
  const getCommentsData = await commentsData(id);
  const comments = document.querySelector(".comments");
  const pop = document.querySelector(".popup-content");
  comments.innerHTML = `<p class="commentsTitle"><b>Comments</b></p>`;
  getCommentsData?.forEach((comment) => {
    comments.innerHTML += `
      <div class="comment">
        <p>${comment.creation_date} ${comment.username}: ${comment.comment}</p>
      </div>
    `;
  });
  pop.appendChild(comments);
};
export default updateComment;
