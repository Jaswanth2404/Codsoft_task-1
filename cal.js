const display = document.getElementById('display');
let memory = 0;
let darkTheme = false;

// Clear Display
function clearDisplay() {
    display.textContent = '0';
}

// Append Value
function appendValue(value) {
    if (display.textContent === '0') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

// Calculate Result
function calculate() {
    try {
        const expression = display.textContent.replace('^', '**'); // Handle exponentiation
        const result = eval(expression); // Evaluate the expression
        display.textContent = result;
    } catch (error) {
        display.textContent = 'Error';
    }
}

// Memory Functions
function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    appendValue(memory.toString());
}

function memoryAdd() {
    try {
        memory += parseFloat(display.textContent);
    } catch {
        memory = 0;
    }
}

// Calculate Trigonometric Functions with input displayed
function calculateTrig(func) {
    try {
        const input = parseFloat(display.textContent);
        const radians = input * (Math.PI / 180); // Convert degrees to radians
        let result = 0;

        switch (func) {
            case 'sin':
                result = Math.sin(radians);
                break;
            case 'cos':
                result = Math.cos(radians);
                break;
            case 'tan':
                result = Math.tan(radians);
                break;
        }

        // Display the function input (e.g., "sin(30)") along with the result
        display.textContent = `${func}(${input}) = ${parseFloat(result.toFixed(6))}`; // Display the function and result
    } catch (error) {
        display.textContent = 'Error';
    }
}

// Toggle Theme
function theme() {
    darkTheme = !darkTheme;
    document.body.classList.toggle('dark-theme', darkTheme);
}
