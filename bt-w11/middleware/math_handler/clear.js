const { State } = require('../../models');

module.exports = (req, res, next) => {
    let { currentNumber, previousNumber, operation } = State.get();

    currentNumber = 0;
    operation = undefined;

    State.update({ currentNumber, previousNumber, operation});
    next();
};
