let enteredValue = 0;
let storedValue = 0;
let displayValue = 0;
let answer = 0;
let operator = "waiting";

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
    operator = e.target.textContent;
    console.log(operator);
    storedValue = enteredValue;
    enteredValue = 0;
    display.textContent = operator;
}

function result(e) {
    console.log("result");
    //console.log(e.target.textContent);
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
    //displayValue = add(enteredValue, storedValue);
    display.textContent =  displayValue;
    enteredValue = 0;
    storedValue = displayValue;
}
