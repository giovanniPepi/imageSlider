const imgUpdater = (img) => {
  const innerContainer = document.querySelector('.innerContainer');
  innerContainer.src = img;
  return innerContainer;
};

export default imgUpdater;
