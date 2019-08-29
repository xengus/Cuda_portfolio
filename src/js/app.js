let a = document.querySelector('button');
a.addEventListener('click',handler)
function handler(event) {
  a.style.backgroundColor = 'red';
}

let button = document.querySelector('.portfolio_buttons')
button.addEventListener('click', handler1);
function handler1(event) {
  setTimeout (function () {
    let target = event.target;
    target.style.backgroundColor = 'cyan';
    }, 5000)
}
