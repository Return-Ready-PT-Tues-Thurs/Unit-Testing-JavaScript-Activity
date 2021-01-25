var expect = require('chai').expect;
const chai = require('chai');
const ChaiPluginAssertType = require('chai-asserttype-extra');
chai.use(ChaiPluginAssertType);

var ATM = require('../src/ATM');

//test suite
describe('ATM properties', () => {
    //unit test
    it('should run test using npm', () => {
        expect(true).to.be.ok;
    });
    
    it('atm amount should be a number when number is passed', () => {
        var atm = new ATM(20, .2);
        expect(atm.amount).to.be.number;
    });
    it('should throw error when non number is passed to atm.amount', () => {
        expect(() => {new ATM('twenty', 1.2)}).to.throw('Amount must be numeric');
    });
    it('atm interestRate should be a number when number is passed', () => {
        var atm = new ATM(20, .2);
        expect(atm.interestRate).to.be.number;
    });
    it('should throw error when non number is passed to atm.interestRate', () => {
        expect(() => {new ATM(20, '20%')}).to.throw('Amount must be numeric');
    });   
});
describe('withdraw', () => {
    var atm = new ATM(100, .2);

    it('atm.withdraw(amount) should withdraw amount passed from the total', () => {
        expect(atm.withdraw(10)).to.equal(90);
    });
    it('atm.withdraw(amount) should check to see if the amount passed is a number and throw an error if NaN', () => {
        expect(() => {atm.withdraw('twenty')}).to.throw('Amount must be numeric');
    });
});
describe('deposit', () => {
    var atm = new ATM(100, .2);

    it('atm.deposit(amount) should add amount passed from the total', () => {
        expect(atm.deposit(10)).to.equal(110);
    });
    it('atm.deposit(amount) should check to see if the amount passed is a number and throw an error if NaN', () => {
        expect(() => {atm.deposit('twenty')}).to.throw('Amount must be numeric');
    });
});
describe('applyInterest', () => {
    var atm = new ATM(100, .2);
    it('atm.applyInterest() should apply interest to total', () => {
        atm.applyInterest();
        expect(atm.amount).to.equal(120);
    });
});
describe('getCurrentBalance', () => {
    var atm = new ATM(100, .2);
    it('atm.getCurrentBalance() should accurately return balance', () => {
        expect(atm.getCurrentBalance()).to.equal(100);
    });
    it('atm.getCurrentBalance() should accurately return balance after withdraw', () => {
        atm.withdraw(20);
        expect(atm.getCurrentBalance()).to.equal(80);
    });
    it('atm.getCurrentBalance() should accurately return balance after deposit', () => {
        atm.deposit(20);
        expect(atm.getCurrentBalance()).to.equal(100);
    });
    it('atm.getCurrentBalance() should accurately return balance after interest is applied', () => {
        atm.applyInterest();
        expect(atm.getCurrentBalance()).to.equal(120);
    });
});