

let currentInput = '';
let inputOutput = document.getElementById('input-el');

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (!isNaN(parseInt(value))) {
            numberClick(value);
        } else if (isOperator(value)) {
            operationClick(value);
        } else if (value === '.') {
            point(value);
        } else if (value === '=') {
            performOperation();
        } else if (value === 'C') {
            clearCalculator();
        } else if (value === '%') {
            handlePercentage();
        }

        inputOutput.value = currentInput;
    });
});

function isOperator(value) {
    return ['+', '-', '*', '/'].includes(value);
}

function numberClick(value) {
    currentInput += value;
}

function operationClick(value) {
    currentInput += ` ${value} `;
}

function point(value) {
    if (!currentInput.includes('.')) {
        currentInput += value;
    }
}

function handlePercentage() {
    // Convert the current input to a percentage
    let result = parseFloat(currentInput) / 100;

    // Display the result in the input field
    inputOutput.value = result;

    // Reset current input for further calculations
    currentInput = result.toString();
}

function performOperation() {
    try {
        let result = eval(currentInput);

        if (!isFinite(result) || isNaN(result)) {
            throw new Error('Error in calculation');
        }

        inputOutput.value = result;
        currentInput = result.toString();
    } catch (error) {
        alert(error.message);
        clearCalculator();
    }
}

function clearCalculator() {
    currentInput = '';
    inputOutput.value = '';
}
