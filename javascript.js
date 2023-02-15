let enteredValue = 0;
let storedValue = 0;
let displayValue = 0;

const display = document.querySelector('.display');
display.textContent = displayValue;

function add(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a+b
}

function subtract(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a-b;
}

function multiply(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    return a*b;
}

function divide(a, b) {
    a = parseInt(a);
    b = parseInt(b);
    if(b !== 0){
        return a/b;
    }
    else {

        return "ERROR";
    }
    
}

function operate(operator, a, b) {
    operator(a, b);
}



const valueButtons = document.querySelectorAll('.value');
valueButtons.forEach(valueButton => valueButton.addEventListener('click', enterValue));

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', operate));

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', result);

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    let enteredValue = 0;
    let storedValue = 0;
    let displayValue = 0;
    display.textContent = "Cleared";
});

function enterValue(e) {
    if(enteredValue === 0){
        enteredValue = parseInt(e.target.textContent);
    }
    else {
        enteredValue = "" + enteredValue + e.target.textContent;
    }
    
    
    console.log(`value = ${enteredValue}`);
    console.log(`stored value = ${storedValue}`);
    display.textContent = enteredValue;
}

function operate(e) {

    if((storedValue != 0) && (enteredValue != 0)) {
        result();
    }
    
    operator = e.target.textContent;
    storedValue = enteredValue;
    enteredValue = 0;
    display.textContent = operator;
}

function result(e) {
    console.log("result");

    switch(operator) {
        case "+":
            displayValue = add(storedValue, enteredValue);
            console.log(displayValue);
            break;
        case "-":
            displayValue = subtract(storedValue, enteredValue);
            break;
        case "*":
            displayValue = multiply(storedValue, enteredValue);
            break;
        case "/":
            displayValue = divide(storedValue, enteredValue);
            break;
        case "C":
            displayValue = 0;
            break;
    }
    
    display.textContent =  displayValue;
    enteredValue = displayValue;
    storedValue = 0;
}

