const getEventListeners = () => {
  const previous = document.querySelector('.previous');
  const next = document.querySelector('.next');

  previous.addEventListener('click', () => console.log('hi'));
  next.addEventListener('click', () => console.log('hi2'));
};

export default getEventListeners;
