const state = {
    currentNumber: "0",
    previousNumber: "0",
    operation: undefined,
};

module.exports.update = newState => {
    Object.assign(state, newState);
};

module.exports.get = () => state;