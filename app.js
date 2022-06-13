const number = document.querySelectorAll('.number');
const keys = document.querySelector('.keypad')
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
const dot = document.querySelector('.decimal')

display.textContent = '0';

let previousNumber = '';
let currentNumber = '';
let operator = '';

// if num clicked, display Num
number.forEach((num) => {
    num.addEventListener('click', function(e) {
        displayNum(e.target.textContent)
    })
    
})

function displayNum(num){
    if(previousNumber !== '' && currentNumber !== '' && operator === '') {
        previousNumber = '';
        display.textContent = currentNumber;
    }
    if(currentNumber.length <=13) {
        currentNumber += num;
        display.textContent = currentNumber;
    } else {
        display.textContent = 'Overloaded!';
    }
}

//if operator clicked, store operator
operators.forEach((ops) => {
    ops.addEventListener('click', (e) => {   
        operatorInput(e.target.textContent)
    })
})

function operatorInput(op) {
    previousNumber = currentNumber;
    currentNumber = ''
    operator = op;
}

// if equal click, calculate from num and operator
equals.addEventListener('click', () => {
    if (currentNumber != '' && previousNumber != '') {
        operate()
    }
});


function operate() {
    if (operator === '+') {
        previousNumber = Number(previousNumber) + Number(currentNumber);
    } else if (operator === '-'){
        previousNumber = Number(previousNumber) - Number(currentNumber);
    } else if (operator === 'x') {
        previousNumber = Number(previousNumber) * Number(currentNumber);
    } else if (operator === '/') {
        previousNumber = Number(previousNumber) / Number(currentNumber);

    };
    display.textContent = roundNumber(previousNumber)
    currentNumber = previousNumber.toString();
    displayResult()
}

//round big num
function roundNumber(num) {
    return Math.round(num * 100000) / 100000
}

//round float
function displayResult() {
    if(currentNumber.length <= 13) {
        display.textContent = currentNumber;
    } else{
        display.textContent = currentNumber.slice(0, 13) + '...';
    }
}


