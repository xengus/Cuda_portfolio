function getRandomColor () {
  let sum = '#';
  const string = 'ABCDEF1234567890';
  while (sum.length < 7) {
    sum+=string.charAt(Math.floor(Math.random()*16)+1)
  }
  return sum;
}

const portfolioButton = document.querySelector('.portfolio_button');  
portfolioButton.addEventListener('click', handler);
function handler (event) {
  event.preventDefault();
  const target = event.target;
  const dataColor = target.dataset.color;
  (dataColor===target.style.backgroundColor) ? target.style.backgroundColor = getRandomColor(): target.style.backgroundColor = 'pink';
}
 
