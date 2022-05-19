import img1 from './img/pexels-ensiha-digital-3701637.jpg';
import img2 from './img/pexels-eriks-abzinovs-3117170.jpg';

const getEventListeners = () => {
  const innerContainer = document.querySelector('.innerContainer');

  const previous = document.querySelector('.previous');
  const next = document.querySelector('.next');

  previous.addEventListener('click', () => console.log('hi'));
  next.addEventListener('click', () => console.log('hi2'));

  const imgs = [img1, img2];

  const nextImg = imgs[1];
  innerContainer.src = nextImg;
};

export default getEventListeners;
