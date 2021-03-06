import imgDatabase from './imgDatabase';
import imgUpdater from './imgUpdater';

const getEventListeners = () => {
  const previous = document.querySelector('.previous');
  const next = document.querySelector('.next');

  let currentImg = 0;

  // listens for clicks, manipulate counter to iterate through array,
  // updates img

  previous.addEventListener('click', () => {
    if (currentImg === 0) {
      const imgToShow = imgDatabase[0];
      imgUpdater(imgToShow);
    } else {
      currentImg -= 1;
      const imgToShow = imgDatabase[currentImg];
      imgUpdater(imgToShow);
    }
  });

  next.addEventListener('click', () => {
    if (currentImg === 12) {
      const imgToShow = imgDatabase[12];
      imgUpdater(imgToShow);
    } else {
      currentImg += 1;
      const imgToShow = imgDatabase[currentImg];
      imgUpdater(imgToShow);
    }
  });
};

export default getEventListeners;
