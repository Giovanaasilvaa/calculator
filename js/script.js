function addValue(value) {
    const display = document.getElementById('result');

    // If calculator is off, turn it on and clear the display
    if (display.value === 'OFF') {
        display.value = '';
        const buttons = document.querySelectorAll('#calculator input[type="button"]');
        buttons.forEach(button => {
            button.disabled = false;
        });
    }

    // Add pressed value to the display
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('result');

    if (display.value === 'OFF') {
        // Turn on the calculator
        display.value = '';
        const buttons = document.querySelectorAll('#calculator input[type="button"]');
        buttons.forEach(button => {
            button.disabled = false;
        });
    } else {
        // If already on, just clear the display
        display.value = '';
    }
}

function calculate() {
    try {
        let expression = document.getElementById('result').value;
        // Replace percentage expressions with multiplication by 0.01
        expression = expression.replace(/(\d+)%/g, (match, p1) => `(${p1} * 0.01)`);
        // Check for division by zero
        if (/\/\s*0/.test(expression)) {
            throw new Error("Division by zero");
        }
        // Evaluate the expression
        const result = eval(expression);
        document.getElementById('result').value = result;
    } catch (e) {
        // Show error if expression is invalid
        document.getElementById('result').value = 'Error';
    }
}

function turnOff() {
    const display = document.getElementById('result');
    display.value = 'OFF';

    // Disable all buttons except number buttons
    const buttons = document.querySelectorAll('#calculator input[type="button"]');
    buttons.forEach(button => {
        if (!button.classList.contains('number')) {
            button.disabled = true;
        }
    });
}

// On page load, turn off calculator and disable all buttons except numbers
window.onload = function () {
    const display = document.getElementById('result');
    display.value = 'OFF';

    const buttons = document.querySelectorAll('#calculator input[type="button"]');
    buttons.forEach(button => {
        if (!button.classList.contains('number')) {
            button.disabled = true;
        }
    });
};
