const { State } = require('../../models');

module.exports = (req, res, next) => {
    let { currentNumber, previousNumber, operation } = State.get();

    previous = parseFloat(previousNumber)
    current = parseFloat(currentNumber)


    let result;
        switch(operation) {
            case "%":
                result = previous % current;
                break;
            case "+":
                result = previous + current;
                break;
            case "-":
                result = previous - current;
                break;
            case "÷":
                result = previous / current;
                break;
            case "×":
                result = previous * current ;
                break;
            default:
                return;
        }

        currentNumber = result + "";
        previousNumber = "0";
        operation = undefined;

    State.update({currentNumber, previousNumber, operation})
    next();
};
