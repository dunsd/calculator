let firstValue = 0;
let secondValue = 0;

const display = document.querySelector('.display');
display.textContent = firstValue;



function add(a, b) {
    return a+b;
}

function subtract(a, b) {
    return a-b;
}

function multiply(a, b) {
    return a*b;
}

function divide(a, b) {
    return a/b;
}

function operate(operator, a, b) {
    operator(a, b);
}