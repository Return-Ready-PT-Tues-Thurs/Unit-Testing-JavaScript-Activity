
class Tesla {
    constructor(charge=100) {
        this.milesPerPercentage = 2.5;
        if (isNaN(charge)) {
            throw new TypeError('Amount must be numeric');
        } else {
            this.chargeRemaining = parseFloat(charge);
        }
    }
    charge(amount) {
        if (isNaN(amount)) {
            throw new TypeError('Amount must be numeric');
        } else {
            this.chargeRemaining += amount;
        }
    }
    fullCharge() {
        this.chargeRemaining = 100;
    }
    drive(miles) {
        if (isNaN(miles)) {
            throw new TypeError('Amount must be numeric');
        } else {
            this.chargeRemaining -= miles / this.milesPerPercentage;
        }
    }
    getRemainingCharge() {
        return this.chargeRemaining;
    }
}

module.exports = Tesla;