import imgDatabase from './imgDatabase';
import imgUpdater from './imgUpdater';

const getEventListeners = () => {
  const previous = document.querySelector('.previous');
  const next = document.querySelector('.next');

  let currentImg = 0;

  // listens for clicks, manipulate counter to iterate through array,
  // updates img

  previous.addEventListener('click', () => {
    if (currentImg === 0) return;
    currentImg -= 1;
    const imgToShow = imgDatabase[currentImg];
    imgUpdater(imgToShow);
  });

  next.addEventListener('click', () => {
    if (currentImg === 13) return;
    currentImg += 1;
    const imgToShow = imgDatabase[currentImg];
    imgUpdater(imgToShow);
  });
};

export default getEventListeners;
