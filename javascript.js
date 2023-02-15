let enteredValue = 0;
let storedValue = 0;
let displayValue = 0;
let answer = 0;
let operator = "waiting";

const display = document.querySelector('.display');
display.textContent = displayValue;



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
    return b/a;
}

function operate(operator, a, b) {
    operator(a, b);
}

//store user entry
//update if additional number pressed
//store user operator
//store next user entry
//when "=" then calculate

const valueButtons = document.querySelectorAll('.value');
valueButtons.forEach(valueButton => valueButton.addEventListener('click', enterValue));

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', operate));

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', result);

function enterValue(e) {
   
    enteredValue = parseInt(e.target.textContent);
    console.log(`value = ${enteredValue}`);
}

function operate(e) {
    operator = e.target.textContent;
    console.log(operator);
    storedValue = enteredValue;
}

function result(e) {
    console.log("result");
    //console.log(e.target.textContent);
    switch(operator) {
        case "+":
            displayValue = add(enteredValue, storedValue);
            break;
        case "-":
            displayValue = subtract(enteredValue, storedValue);
            break;
        case "*":
            displayValue = multiply(enteredValue, storedValue);
            break;
        case "/":
            displayValue = divide(enteredValue, storedValue);
            break;
    }
    //displayValue = add(enteredValue, storedValue);
    display.textContent =  displayValue;
    enteredValue = 0;
    storedValue = 0;
}
