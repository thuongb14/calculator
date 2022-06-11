const display = document.querySelector('.display');
const number = document.querySelectorAll('.number');

function display() {
    
}

let current = [];

number.forEach((num) => {
    num.addEventListener('click', function(e) {
        display.textContent += e.target.value;
        current.push(e.target.value);
    })
})

let currentNumber = +current.join('')
