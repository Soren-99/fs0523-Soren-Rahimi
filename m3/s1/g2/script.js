"use strict";
class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Fondi insufficienti");
        }
    }
    getBalance() {
        return this.balance;
    }
}
class SonAccount extends BankAccount {
    oneDeposit(amount) {
        this.deposit(amount);
    }
    oneWithdraw(amount) {
        this.withdraw(amount);
    }
}
class MotherAccount extends BankAccount {
    addInterest() {
        const interest = this.getBalance() * 0.1;
        this.deposit(interest);
    }
    twoDeposit(amount) {
        this.deposit(amount);
    }
    twoWithdraw(amount) {
        this.withdraw(amount);
    }
}
const sonAcc = new SonAccount();
const motherAcc = new MotherAccount();
sonAcc.oneDeposit(30);
sonAcc.oneWithdraw(5);
motherAcc.twoDeposit(500);
motherAcc.twoWithdraw(70);
motherAcc.addInterest();
console.log("Saldo conto figlio:", sonAcc.getBalance());
console.log("Saldo conto madre:", motherAcc.getBalance());
