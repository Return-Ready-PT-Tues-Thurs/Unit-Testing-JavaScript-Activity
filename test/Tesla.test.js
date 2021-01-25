var expect = require('chai').expect;
const chai = require('chai');
const ChaiPluginAssertType = require('chai-asserttype-extra');
chai.use(ChaiPluginAssertType);

var Tesla = require('../src/Tesla');

describe('Tesla', () => {
    var tesla;
    beforeEach(() => {
        tesla = new Tesla(50);
    });
    
    it('milesPerPercentage should equal 2.5', () => {
        expect(tesla.milesPerPercentage).to.be.number;
        expect(tesla.milesPerPercentage).to.equal(2.5);
    });
    it('chargeRemaining should be a number', () => {
        expect(tesla.chargeRemaining).to.be.number;
        expect(tesla.chargeRemaining).to.equal(50);
    });
    it('constructor should throw error when chargeRemaining passed to constructor is NaN', () => {
        expect(()=>{new Tesla('fifty')}).to.throw();
    });
    it('charge(amount) should throw error if amount passed is NaN', () => {
        expect(()=>{tesla.charge()}).to.throw();
    });
    it('charge(amount) should add amount to chargeRemaining', () => {
        tesla.charge(25);
        expect(tesla.chargeRemaining).to.equal(75);
    });
    it('fullCharge() should change chargeRemaining to 100', () => {
        tesla.fullCharge();
        expect(tesla.chargeRemaining).to.equal(100);
    });
    it('drive(miles) should throw error if miles passed is NaN or if no miles passed', () => {
        expect(()=>{tesla.drive()}).to.throw();
        expect(()=>{tesla.drive('three')}).to.throw();
    });
    it('drive(miles) should correctly update chargeRemaining based on the number of miles driven', () => {
        tesla.drive(2.5);
        expect(tesla.chargeRemaining).to.equal(49);
        tesla.drive(5);
        expect(tesla.chargeRemaining).to.equal(47);
    });
    it('getRemainingCharge() should return number', () => {
        expect(tesla.getRemainingCharge()).to.be.number;
    });
    it('getRemainingCharge() should return 100 after fullCharge()', () => {
        tesla.fullCharge();
        expect(tesla.getRemainingCharge()).to.equal(100);
    });
    it('getRemainingCharge() should return appropriate charge after charge(number)', () => {
        tesla.charge(25);
        expect(tesla.getRemainingCharge()).to.equal(75);
    });
    it('getRemainingCharge() should return apprpriate charge after drive(miles)', () => {
        tesla.drive(30);
        expect(tesla.getRemainingCharge()).to.equal(38);
    });
});