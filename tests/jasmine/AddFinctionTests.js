const chai =  require('chai');
const expect = chai.expect;
const calculator = require('../../main/Calculator');

describe('Unit tests of Calculator::add', () => {

    it('should allow to call Calculator::add for instance of class', () => {
        expect(calculator.add).to.not.be.undefined;
    });

    it('should return positive results of the summ', () => {
        expect(calculator.add(1,0)).to.equal(1);
        expect(calculator.add(1, 2, 3)).to.equal(6);
        expect(calculator.add(-1, 2, 3)).to.equal(4);
    });

    it('should return negative results of the summ', () => {
        expect(calculator.add(1,0)).to.not.equal(5);
    });

    it('should throw error of the summ', () => {
        expect(calculator.add).to.throw();
    });
});
