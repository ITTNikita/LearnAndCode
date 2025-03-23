"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var Wallet = /** @class */ (function () {
    function Wallet(baseBalance) {
        this.balance = baseBalance;
    }
    Wallet.prototype.getTotalMoney = function () {
        return this.balance;
    };
    Wallet.prototype.addMoney = function (amount) {
        if (amount > 0) {
            this.balance += amount;
        }
        else {
            console.log("Invalid deposit amount.");
        }
    };
    Wallet.prototype.debit = function (amount) {
        if (amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            return true;
        }
        console.log("Insufficient funds or invalid amount.");
        return false;
    };
    return Wallet;
}());
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName, initialMoney) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.myWallet = new Wallet(initialMoney);
    }
    Customer.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer.prototype.getLastName = function () {
        return this.lastName;
    };
    Customer.prototype.makePayment = function (amount) {
        return this.myWallet.debit(amount);
    };
    Customer.prototype.addMoney = function (amount) {
        this.myWallet.addMoney(amount);
    };
    Customer.prototype.checkBalance = function () {
        return this.myWallet.getTotalMoney();
    };
    return Customer;
}());
var firstName = readlineSync.question("Enter first name: ");
var lastName = readlineSync.question("Enter last name: ");
var initialMoney = parseInt(readlineSync.question("Enter initial balance: "));
var myCustomer = new Customer(firstName, lastName, initialMoney);
console.log(" ".concat(myCustomer.getFirstName(), " ").concat(myCustomer.getLastName()));
console.log("Your current balance: ".concat(myCustomer.checkBalance()));
var payment = parseInt(readlineSync.question("Enter payment amount: "));
if (myCustomer.makePayment(payment)) {
    console.log("Payment received");
}
else {
    console.log("Come back later and get my money.");
}
console.log("Remaining balance: ".concat(myCustomer.checkBalance()));
