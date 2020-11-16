const { State } = require('../../models');

module.exports = (req, res, next) => {
    let { currentNumber, previousNumber, operation } = State.get();
    const { operand } = req.params;

    if(operation != undefined) {
        next()
        return;
    }
    
    operation = operand;
    previousNumber = currentNumber;
    currentNumber = 0;

    console.log("operation: ", operation);
    
    State.update({ currentNumber, previousNumber, operation});
    next();
};
