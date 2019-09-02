function getRandomColor () {
  return '#' + Math.floor(Math.random()*10000000).toString(16);
}

const pageContainer = document.querySelector('.page-container');   //a и buttons везде
pageContainer.addEventListener('click', handler);
function handler (event) {
  const target = event.target;
  const anchors = target.closest ('a');
  const buttons = target.closest('button');
  const dat = target.dataset.color;
  if (anchors||buttons) {
    target.style.backgroundColor = getRandomColor();
  };
  if (dat) {
    target.style.backgroundColor = 'cyan';
  };
  event.preventDefault();
}
