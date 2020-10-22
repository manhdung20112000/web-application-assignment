class Calculator {
    constructor(currentOperandTextElement) {
        this.currentOperandTextElement = currentOperandTextElement;
        this.currentNumber = 0;
        this.operation = undefined;
        this.updateDisplay();
    }

    appendNumber(number) {
        let temp_str = this.currentNumber.toString();
        if (number == '.') {
            if (temp_str.includes('.')) return;
            else {

            }

        else
        
        this.currentNumber = this.currentNumber*10 + parseInt(number, 10)
        
    }

    clear() {
        this.currentNumber = 0;
        this.operation = undefined;
    }   

    delete() {
        let temp = this.currentNumber.toString();
        temp = temp.slice(0, -1)
        if (temp.length >= 1){
            this.currentNumber = parseInt(temp);
        }
        else {this.currentNumber = 0;}
        this.updateDisplay()
    }

    operand(operation){
        if(this.operation != undefined) return;
        this.operation = operation;
        this.previousNumber = this.currentNumber;
        this.currentNumber = 0;
    }

    compute() {
        let result;
        switch(this.operation) {
            case "%":
                result = this.previousNumber % this.currentNumber;
                break;
            case "+":
                result = this.currentNumber + this.previousNumber;
                break;
            case "-":
                result = this.currentNumber - this.previousNumber;
                break;
            case "÷":
                result = this.previousNumber / this.currentNumber;
                break;
            case "×":
                result = this.currentNumber * this.previousNumber;
                break;
            default:
                return;
        }
        this.currentNumber = result;
        this.previousNumber = 0;
        this.operation = undefined;
    }

    equal() {
        this.compute()
    }

    updateDisplay() {
        if(this.operation == undefined){
            this.currentOperandTextElement.innerText = this.currentNumber;
        }
        else {
            if (this.currentNumber == 0) {
                this.currentOperandTextElement.innerText = this.previousNumber + this.operation;
                return;    
            }
            this.currentOperandTextElement.innerText = this.previousNumber + this.operation + this.currentNumber;
        }
        
    }
}


const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const currentOperandTextElement = document.querySelector('[data-operand]');

const calculator = new Calculator(currentOperandTextElement);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("number hit: ", button.innerHTML);
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(operation => {
    operation.addEventListener("click", () => {
        console.log("operation: ", operation.innerHTML)
        if (operation.innerText == "AC"){
            calculator.clear();
            calculator.updateDisplay();
        }

        else if (operation.innerText == "DEL") {
            calculator.delete();
            calculator.updateDisplay();
        }

        else if (operation.innerText == "="){
            calculator.equal();
            calculator.updateDisplay();
        }

        else {
            calculator.operand(operation.innerText);
            calculator.updateDisplay();
        }
    });
});
