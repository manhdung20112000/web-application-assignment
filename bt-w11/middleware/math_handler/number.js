const { State } = require('../../models');

module.exports = (req, res, next) => {
    let { currentNumber, previousNumber, operation, newExpression } = State.get();
    const { number } = req.params;

    if (currentNumber == "0") {
        currentNumber = number;
    }

    else {
        if (number == "point") {
            if (currentNumber.includes('.')) {
                next();
                return;
            }
            else {
                currentNumber += ".";
                next();
                return;
            }
        }
        currentNumber += number
        console.log(currentNumber, typeof(currentNumber));
    }

    State.update({ currentNumber, previousNumber, operation, newExpression});
    next();
};
