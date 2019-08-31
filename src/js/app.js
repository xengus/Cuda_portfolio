const buttonHeader = document.querySelector('button'); //header (не сработает)
buttonHeader.addEventListener('click', handler)
function handler(event) {
  buttonHeader.style.backgroundColor = 'red';
}

const button_Portfolio = document.querySelector('.portfolio_buttons')  //a в портфолио
button_Portfolio.addEventListener('click', handler1);
function handler1(event) {
  setTimeout (function () {
    const target = event.target;
    target.style.backgroundColor = 'cyan';
    target.style.color = 'white';
    }, 2000);
  event.preventDefault();  
}

function get_Random_color () {
  return '#' + Math.floor(Math.random()*10000000).toString(16);
}

const button_all = document.querySelector('.page-container') // button везде
button_all.addEventListener('click', handler2);
function handler2(event) {
  const target1 = event.target;
  const butt = target1.closest('button');
  if (butt) {
    target1.style.backgroundColor = get_Random_color();
    target1.style.color = 'yellow';
  }
}
