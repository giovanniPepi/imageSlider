import leftSvg from './img/chevron-left.svg';
import rightSvg from './img/chevron-right.svg';

const domLoader = (img) => {
  const body = document.querySelector('body');

  const container = document.createElement('main');
  container.setAttribute('class', 'container');

  const outerContainer = document.createElement('div');
  outerContainer.setAttribute('class', 'outerContainer');

  const innerContainer = new Image();
  innerContainer.src = img;
  innerContainer.setAttribute('class', 'innerContainer');

  const previousArrow = document.createElement('svg');
  previousArrow.setAttribute('role', 'img');
  previousArrow.setAttribute('class', 'previous');
  previousArrow.innerHTML = leftSvg;

  const nextArrow = document.createElement('svg');
  nextArrow.setAttribute('role', 'img');
  nextArrow.setAttribute('class', 'next');
  nextArrow.innerHTML = rightSvg;

  // appendings
  outerContainer.appendChild(innerContainer);
  container.appendChild(outerContainer);

  body.appendChild(previousArrow);
  body.appendChild(nextArrow);
  body.appendChild(container);
};

export default domLoader;
