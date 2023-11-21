
class BankAccount {
    private balance: number;

    constructor(balance: number =0) {
        this.balance = balance; 
    }

    public deposit  (amount: number) {
        this.balance += amount;
    }

    public withdraw (amount: number) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Fondi insufficienti");
        }
    }

    public getBalance(): number {
        return this.balance;
    }
}

class SonAccount extends BankAccount {
    public oneDeposit(amount: number) {
        this.deposit(amount)
    }

    public oneWithdraw (amount: number) {
    this.withdraw(amount);
    }
}

class MotherAccount extends BankAccount {
    public addInterest() {
        const interest = this.getBalance() * 0.1;
        this.deposit(interest);
    }

    public twoDeposit(amount: number) {
        this.deposit(amount);
    }

    public twoWithdraw(amount: number) {
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

