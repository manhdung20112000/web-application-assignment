const { State } = require('../models');

module.exports.render = (req, res, next) => {
    if (req.url !== '/') {
        res.redirect('/');
    } 
    
    else {
        let { currentNumber, previousNumber, operation, newExpression } = State.get();
        let result_txt;

        if (operation == undefined) {
            result_txt = currentNumber;
        }

        else {
            if (currentNumber == 0) {
                result_txt = previousNumber + operation;
                next();
                return;    
            }

            result_txt = previousNumber + operation + currentNumber;
        }

        res.render('index', {result_txt});
    } 
    
};
