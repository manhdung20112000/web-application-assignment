const { State } = require('../../models');

module.exports = (req, res, next) => {
    let { currentNumber, previousNumber, operation, newExpression } = State.get();

    let temp = currentNumber.toString();
    temp = temp.slice(0, -1)

    if (temp.length >= 1){
        currentNumber = parseInt(temp);
    }
    
    else {currentNumber = 0;}

    State.update({ currentNumber, previousNumber, operation, newExpression});
    next();
};
