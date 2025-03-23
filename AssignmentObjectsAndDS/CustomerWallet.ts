import * as readlineSync from 'readline-sync';

class Wallet {
    private balance: number;

    constructor(baseBalance: number) {
        this.balance = baseBalance;
    }

    getTotalMoney(): number {
        return this.balance;
    }

    addMoney(amount: number): void {
        if (amount > 0) {
            this.balance += amount;
        } else {
            console.log("Invalid deposit amount.");
        }
    }

    debit(amount: number): boolean {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}

class Customer {
    private firstName: string;
    private lastName: string;
    private myWallet: Wallet;

    constructor(firstName: string, lastName: string, initialMoney: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.myWallet = new Wallet(initialMoney);
    }

    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    makePayment(amount: number): boolean {
        return this.myWallet.debit(amount);
    }

    addMoney(amount: number): void {
        this.myWallet.addMoney(amount);
    }

    checkBalance(): number {
        return this.myWallet.getTotalMoney();
    }
}

const firstName = readlineSync.question("Enter first name: ");
const lastName = readlineSync.question("Enter last name: ");
const initialMoney = parseInt(readlineSync.question("Enter initial balance: "));

const myCustomer = new Customer(firstName, lastName, initialMoney);

console.log(`${myCustomer.getFirstName()} ${myCustomer.getLastName()}`);
console.log(`Your current balance: ${myCustomer.checkBalance()}`);
const payment = parseInt(readlineSync.question("Enter payment amount: "));

if (myCustomer.makePayment(payment)) {
    console.log("Payment received");
} else {
    console.log("Come back later and get my money.");
}

console.log(`Remaining balance: ${myCustomer.checkBalance()}`);
