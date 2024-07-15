const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn-calc');
let currentInput = '0';
let previousInput = '';
let operation = null;
let shouldResetScreen = false;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (button.classList.contains('btn-number')) {
            inputNumber(button.dataset.number);
        } else if (button.classList.contains('btn-operator')) {
            inputOperator(button.dataset.operator);
        } else if (button.id === 'equals') {
            calculate();
        } else if (button.id === 'clear') {
            clear();
        }
        updateDisplay();
    });
});

function inputNumber(number) {
    if (currentInput === '0' || shouldResetScreen) {
        currentInput = number;
        shouldResetScreen = false;
    } else {
        currentInput += number;
    }
}

function inputOperator(op) {
    if (operation !== null) calculate();
    previousInput = currentInput;
    operation = op;
    shouldResetScreen = true;
}

function calculate() {
    let computation;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
        case '+':
            computation = prev + current;
            break;
        case '-':
            computation = prev - current;
            break;
        case '*':
            computation = prev * current;
            break;
        case '/':
            computation = prev / current;
            break;
        default:
            return;
    }
    currentInput = computation.toString();
    operation = null;
    previousInput = '';
    shouldResetScreen = true;
}

function clear() {
    currentInput = '0';
    previousInput = '';
    operation = null;
}

function updateDisplay() {
    display.textContent = currentInput;
}