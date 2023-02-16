//Initialise variables
let enteredValue = 0;
let storedValue = 0;
let displayValue = 0;
let operator = "equals"
const numReg = /^[0-9]/g; 

//Select elements to use
const display = document.querySelector('.displayUpper');
display.textContent = displayValue;

const displayLower = document.querySelector('.displayLower');
displayLower.textContent = displayValue;

const valueButtons = document.querySelectorAll('.value');
valueButtons.forEach(valueButton => valueButton.addEventListener('click', enterValue));

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(operatorButton => operatorButton.addEventListener('click', operate));

const equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', result);

document.addEventListener('keydown', (e) => { //Allow keyboard inputs for all buttons
    let keyEvent = document.getElementById(e.key);
    if(keyEvent === null){
        return;
    }
    keyEvent.click();
});

const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', () => {
    enteredValue = 0;
    storedValue = 0;
    displayValue = 0;
    console.log(`entered = ${enteredValue}, stored = ${storedValue}, display = ${displayValue}`);
    display.textContent = "Cleared";
    displayLower.textContent = 0;
}); 

//Maths function
function add(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return a+b
}

function subtract(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return a-b;
}

function multiply(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    return a*b;
}

function divide(a, b) {
    a = parseFloat(a);
    b = parseFloat(b);
    if(b !== 0){
        console.log("DIVIDE");
        return a/b;
    }
    else {
        return "ERROR"; //Send error to result function to stop divide by 0
    }
    
}
//Operator/results functions
function operate(operator, a, b) {
    operator(a, b);
}

function enterValue(e) {
    if(enteredValue.toString().length === 9){
        alert("Maximum length of 10 characters reached!")
        return;
    }

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

    if((storedValue != 0) && (enteredValue != 0)) { //Allows for sequences of operands
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
            displayValue = roundNum(add(storedValue, enteredValue));
            break;
        case "-":
            displayValue = roundNum(subtract(storedValue, enteredValue));
            break;
        case "*":
            displayValue = roundNum(multiply(storedValue, enteredValue));
            break;
        case "/":
            if(divide(storedValue, enteredValue) === "ERROR"){
                displayValue = 0;
                alert("You can't divide by 0!");
                break;
            }
            displayValue = roundNum(divide(storedValue, enteredValue)); 
            break;
    }
    
    displayLower.textContent =  displayValue;
    enteredValue = displayValue;
    storedValue = 0;
}

function roundNum(value) {
    return Math.round(value * 1000) / 1000;
}


