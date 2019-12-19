const clockContainer = document.querySelector('.js-clock'),
  clockTitle = clockContainer.querySelector('h1');

function getTime() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  clockTitle.innerHTML = `${hours}:${minutes < 10 ? 0+minutes : minutes}:${seconds < 10 ? 0+seconds : seconds}`;
}

function init() {
  getTime();
}

init();
