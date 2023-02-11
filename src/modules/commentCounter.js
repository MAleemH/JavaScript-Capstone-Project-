const commentCounter = () => {
  const singleComment = document.querySelectorAll('.addedComments');
  return singleComment.length;
};
export default commentCounter;
