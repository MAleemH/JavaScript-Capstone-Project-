import commentsData from "./fetchComments";

const updateComment = async (id) => {
  const getCommentsData = await commentsData(id);
  const comments = document.querySelector(".comments");
  const showComments = document.querySelector(".showComments");
  getCommentsData.forEach((comment) => {
    showComments.innerHTML += `
    <p class="addedComments">${comment.creation_date} ${comment.username}: ${comment.comment}</p>
    `;
  });
  comments.appendChild(showComments);

  const commentTitle = document.querySelector("h2");
  commentTitle.innerHTML = `
    Comments `;
  const commentsHTML = document.querySelector('.commentsHTML');
  commentsHTML.classList.add('displayNone');
};

export const addUi = (username, comment) => {
  const comments = document.querySelector('.comments');
  const showComments = document.querySelector('.showComments');

  let date = new Date();
  const dateString =
    `${date.getFullYear() 
    }-${ 
    (date.getMonth() + 1).toString().padStart(2, "0") 
    }-${ 
    date.getDate().toString().padStart(2, "0")}`;
  showComments.innerHTML += `
  <p class="addedComments">${dateString} ${username}: ${comment}</p>
  `;
  comments.appendChild(showComments);
};

export default updateComment;
