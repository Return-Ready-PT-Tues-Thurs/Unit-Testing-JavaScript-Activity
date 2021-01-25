
class ATM {
    constructor(amount, interestRate) {
        if (isNaN(amount)) {
            throw new TypeError('Amount must be numeric');
        } else {
            this.amount = parseFloat(amount);
            // this.interestRate = amount;
        }
        //interest rate is put in as a percentage, if user wishes to put in interest as a whole number (eg 20% -> 20, would need to divide by 100)
        if (isNaN(interestRate)) {
            throw new TypeError('Amount must be numeric');
        } else {
            this.interestRate = parseFloat(interestRate);
        }
    }
    withdraw(amount) {
        if (isNaN(amount)) {
            throw new TypeError('Amount must be numeric');
        } else {
            this.amount -= amount;
        }
        return this.amount;
    }
    deposit(amount) {
        if (isNaN(amount)) {
            throw new TypeError('Amount must be numeric');
        } else {
            this.amount += amount;
        }
        return this.amount;
    }
    applyInterest() {
        this.amount += this.amount * this.interestRate;
    }
    getCurrentBalance() {
        return this.amount;
    }
}

module.exports = ATM;

