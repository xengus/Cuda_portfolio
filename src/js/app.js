function getRandomColor () {
  const string = "ABCDEF0123456789"; 
  let  s = "#";
  while (s.length < 7 ) {
    s += string.charAt(Math.floor((Math.random()*16)+1));
  }
  return s;
}

const pageContainer = document.querySelector('.page-container');   
pageContainer.addEventListener('click', handler);
function handler (event) {
  event.preventDefault();
  const target = event.target;
  const anchors = target.closest ('a');
  const buttons = target.closest('button');
  const dat = target.dataset.color;
  let result = (anchors||buttons) ? target.style.backgroundColor = getRandomColor():false;
  
}
