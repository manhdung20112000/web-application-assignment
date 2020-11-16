const { State } = require('../../models');

module.exports = (req, res, next) => {
    let { currentNumber, previousNumber, operation } = State.get();
    const { number } = req.params;

    if (currentNumber == "0" && number !== "point") {
        currentNumber = number;
    }

    else {
        if (number === "point") {
            if (currentNumber.includes('.')) {
                next();
                return;
            }
            else {
                currentNumber += "."
                State.update({ currentNumber, previousNumber, operation});
                next();
                return;
            }
        }
        currentNumber += number
        console.log(currentNumber, typeof(currentNumber));
    }

    State.update({ currentNumber, previousNumber, operation});
    next();
};
