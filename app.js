const number = document.querySelectorAll('.number');
const keys = document.querySelector('.keypad')
const display = document.querySelector('.display');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equal');
const deci = document.querySelector('.decimal');
const clear = document.querySelector('.clear');
const del = document.querySelector('.delete');
const negative = document.querySelector('.negate');

display.textContent = '0';


let decimal = false;

deci.addEventListener('click', function() {
  decimal = true;
})

let clearCal = false;
let previousNumber = '';
let currentNumber = '';
let operator = '';




//Delete 1 number function
del.addEventListener('click', deleteNum);

function deleteNum() {
  currentNumber = currentNumber.slice(0, -1);
  display.textContent = currentNumber;
  if(currentNumber == '') {
    display.textContent = '0'
  }
}

// Clear every variable
clear.addEventListener('click', clearAll);

function clearAll() {
  previousNumber = '';
  currentNumber = '';
  operator = ''
  display.textContent = '0';
}

// if num clicked, display Num
number.forEach((num) => {
    num.addEventListener('click', function(e) {
        displayNum(e.target.textContent)
    })
})


function displayNum(num){
  currentNumber = currentNumber.toString();
  previousNumber = previousNumber.toString();
    if(currentNumber.length <=13) {
        currentNumber += num;
        display.textContent = currentNumber;
    } else if (currentNumber.length > 13) {
        display.textContent = 'Overloaded!';
    } if (clearCal == true) {
      currentNumber = '';
      clearCal = false;
      currentNumber += num;
      display.textContent = currentNumber;
    } if (decimal == true) {
      display.textContent = currentNumber;
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

let equal = false

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
        if (currentNumber == 0) {
            previousNumber = 'Error';
        } else {
            previousNumber = Number(previousNumber) / Number(currentNumber);
        }
    };
    clearCal = true;
    display.textContent = roundNumber(previousNumber)
    previousNumber = previousNumber.toString()
    displayResult()
}

//round big num
function roundNumber(num) {
    return Math.round(num * 100000) / 100000
}

//round float
function displayResult() {
    if(previousNumber.length <= 13) {
        display.textContent = previousNumber;
        currentNumber = previousNumber;
        previousNumber = ''
    } else{
        display.textContent = previousNumber.slice(0, 13) + '...';
        currentNumber = previousNumber;
        previousNumber = ''
    }
}

// add decimal dot
deci.addEventListener('click', addDecimal);

function addDecimal() {
    if(!currentNumber.includes('.')) {
        currentNumber += '.';
        display.textContent = currentNumber;
    }
}

//add negative sign
negative.addEventListener('click', addNegative);

function addNegative() {
    if(!currentNumber.includes("-")) {
        currentNumber = "-" + currentNumber;
        display.textContent = currentNumber
    };
};