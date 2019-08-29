let a = document.querySelector('button'); //header (не сработает)
a.addEventListener('click',handler)
function handler(event) {
  a.style.backgroundColor = 'red';
}

let button = document.querySelector('.portfolio_buttons')  //a в портфолио
button.addEventListener('click', handler1);
function handler1(event) {
  setTimeout (function () {
    let target = event.target;
    target.style.backgroundColor = 'cyan';
    target.style.color = 'white';
    }, 4000)
}

let button1 = document.querySelector('.page-container') // button везде
button1.addEventListener('click', handler2);
function handler2(event) {
  let target = event.target;
  let butt = target.closest('button');
  if (butt) {
    target.style.backgroundColor = 'purple';
    target.style.color = 'yellow';
  }
}