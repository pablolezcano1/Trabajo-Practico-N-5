function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}

function deleteLastCharacter() {
    const display = document.getElementById('display');
    const currentValue = display.value;
    display.value = currentValue.slice(0, -1); // Elimina el último carácter
}
function calculateFactorial() {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.value);

    if (Number.isInteger(currentValue) && currentValue >= 0) {
        let factorial = 1;
        for (let i = 2; i <= currentValue; i++) {
            factorial *= i;
        }
        display.value = factorial;
    } else {
        display.value = 'Error';
    }
}

function changeSign() {
    const display = document.getElementById('display');
    const currentValue = parseFloat(display.value);

    if (!isNaN(currentValue)) {
        display.value = currentValue * -1;
    }
}

function insertPi() {
    const display = document.getElementById('display');
    display.value += Math.PI;
}