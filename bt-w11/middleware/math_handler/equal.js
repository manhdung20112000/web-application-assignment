const { State } = require('../../models');

module.exports = (req, res, next) => {
    let { currentNumber, previousNumber, operation, newExpression } = State.get();

    previous = parseFloat(previousNumber)
    current = parseFloat(currentNumber)

    let result;
        switch(operation) {
            case "percent":
                result = previous % current;
                break;
            case "add":
                result = previous + current;
                break;
            case "substract":
                result = previous - current;
                break;
            case "div":
                result = previous / current;
                break;
            case "mul":
                result = previous * current ;
                break;
            default:
                return;
        }

        currentNumber = result + "";
        previousNumber = "0";
        operation = undefined;

    State.update({currentNumber, previousNumber, operation, newExpression})
    next();
};
