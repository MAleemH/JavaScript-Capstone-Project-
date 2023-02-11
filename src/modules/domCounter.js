const domCounter = () => {
  const cards = document.querySelectorAll('.card');
  const noOfShows = cards.length;
  return noOfShows;
}

export default domCounter;