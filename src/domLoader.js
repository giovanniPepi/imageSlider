const domLoader = () => {
  const body = document.querySelector('body');

  const outerContainer = document.createElement('section');
  outerContainer.setAttribute('class', 'outerContainer');

  const innerContainer = document.createElement('section');
  innerContainer.setAttribute('class', 'innerContainer');

  // appendings
  outerContainer.appendChild(innerContainer);
  body.appendChild(outerContainer);
};

export default domLoader;
