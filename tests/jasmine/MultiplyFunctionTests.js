const chai =  require('chai');
const expect = chai.expect;
const calculator = require('../main/Calculator');

describe('Unit tests of Calculator::multiply', () => {

    it('should allow to call Calculator::multiply for instance of class', () => {
        expect(calculator.multiply).to.not.be.undefined;
    });

    it('should return positive results of the multiply', () => {
        expect(calculator.multiply(1, 0)).to.equal(0);
        expect(calculator.multiply(54, 77)).to.equal(4158);
        expect(calculator.multiply(1, 2, 3)).to.equal(6);
        expect(calculator.multiply(-1, 2, 3)).to.equal(-6);
    });

    it('should return negative results of the multiply', () => {
        expect(calculator.multiply(1,0)).to.not.equal(5);
    });

    it('should throw error of the multiply', () => {
        expect(calculator.multiply).to.throw();
    });
});
