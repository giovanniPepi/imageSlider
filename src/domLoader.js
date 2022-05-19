const domLoader = () => {
  const body = document.querySelector('body');

  const container = document.createElement('main');
  container.setAttribute('class', 'container');

  const outerContainer = document.createElement('div');
  outerContainer.setAttribute('class', 'outerContainer');

  const innerContainer = document.createElement('div');
  innerContainer.setAttribute('class', 'innerContainer');

  // appendings
  outerContainer.appendChild(innerContainer);
  container.appendChild(outerContainer);

  body.appendChild(container);
};

export default domLoader;
