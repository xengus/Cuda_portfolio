function getRandomColor () {
  let sum = '#';
  const string = 'ABCDEF1234567890';
  while (sum.length < 7) {
    sum+=string.charAt(Math.floor(Math.random()*16)+1)
  }
  return sum;
}

const pageContainer = document.querySelector('.page-container');  
pageContainer.addEventListener('click', handler);
function handler (event) {
  event.preventDefault();
  const target = event.target;
  const butt = target.closest('button');
  const anch = target.closest('a');
  const dataColor = target.dataset.color;
  (butt||anch) ? (dataColor===target.style.backgroundColor) ? target.style.backgroundColor = getRandomColor(): target.style.backgroundColor = 'pink': false;
}
 
