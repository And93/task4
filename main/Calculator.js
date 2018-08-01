class Calculator {

    add() {
        if (arguments.length > 1) {
            let sum;
            for (const value in arguments) {
                if (typeof arguments[value] !== 'number') {
                    throw new Error('Please set all arguments to Calculator::add a number type');
                }
                sum = (value === '0') ? arguments[value] : sum + arguments[value];
            }
            return sum;
        }
        throw new Error('Please set more that one argument for the Calculator::add');
    };

    multiply() {
        if (arguments.length > 1) {
            let mult;
            for (const value in arguments) {
                if (typeof arguments[value] !== 'number') {
                    throw new Error('Please set all arguments to Calculator::multiply a number type');
                }
                mult = (value === '0') ? arguments[value] : mult * arguments[value];
            }
            return mult;
        }
        throw new Error('Please set more that one argument for the Calculator::multiply');
    };
};

module.exports = new Calculator();
