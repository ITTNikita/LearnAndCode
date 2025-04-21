import * as readline from "readline";

class ATMError extends Error {}
class InsufficientFundsError extends ATMError {}
class ATMOutOfCashError extends ATMError {}
class ServerConnectionError extends ATMError {}
class CardBlockedError extends ATMError {}
class DailyLimitExceededError extends ATMError {}

interface UserAccount {
    userName: string;
    accountNumber: number;
    pin: number;
    balance: number;
    dailyWithdrawn: number;
}

class ATM {
    private atmCash: number;
    private maxDailyLimit: number = 20000;
    private invalidPinAttempts: number = 0;
    private isCardBlocked: boolean = false;
    private userAccount: UserAccount;

    constructor(atmCash: number, userAccount: UserAccount) {
        this.atmCash = atmCash;
        this.userAccount = userAccount;
    }

    private connectedToServer(): boolean {
        return Math.random() > 0.1;
    }

    validatePin(inputPin: number) {
        if (this.isCardBlocked) {
            throw new CardBlockedError("Card is blocked.");
        }

        if (inputPin !== this.userAccount.pin) {
            this.invalidPinAttempts++;
            if (this.invalidPinAttempts >= 3) {
                this.isCardBlocked = true;
                throw new CardBlockedError("Card is blocked due to 3 invalid PIN attempts.");
            }
            throw new ATMError(`Invalid PIN. Attempt ${this.invalidPinAttempts}/3`);
        }

        this.invalidPinAttempts = 0;
    }

    async withDraw(inputPin: number) {
        if (!this.connectedToServer()) {
            throw new ServerConnectionError("Server is not connected.");
        }

        this.validatePin(inputPin);

        const amount = Number(await ask("Enter amount to withdraw: ₹"));

        if (amount > this.userAccount.balance) {
            throw new InsufficientFundsError("Insufficient balance in account.");
        }

        if (amount > this.atmCash) {
            throw new ATMOutOfCashError("ATM has insufficient cash.");
        }

        if (this.userAccount.dailyWithdrawn + amount > this.maxDailyLimit) {
            throw new DailyLimitExceededError("Daily withdrawal limit exceeded.");
        }

        this.userAccount.balance -= amount;
        this.atmCash -= amount;
        this.userAccount.dailyWithdrawn += amount;

        console.log(` Withdrawal successful: ₹${amount}`);
        console.log(` Remaining Account Balance: ₹${this.userAccount.balance}`);
    }

    displayUserDetails() {
        console.log("\n=== 🧾 User Details ===");
        console.log(`Name: ${this.userAccount.userName}`);
        console.log(` Account Number: ${this.userAccount.accountNumber}`);
        console.log(` Balance: ₹${this.userAccount.balance}`);
        console.log(` Today's Withdrawn: ₹${this.userAccount.dailyWithdrawn}`);
        console.log(` Card Status: ${this.isCardBlocked ? ' Blocked' : ' Active'}`);
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function ask(question: string): Promise<string> {
    return new Promise((resolve) => rl.question(question, resolve));
}

async function main() {
    const user: UserAccount = {
        userName: "Nikita",
        accountNumber: 12345678,
        pin: 9999,
        balance: 25000,
        dailyWithdrawn: 0,
    };

    const atm = new ATM(50000, user);

    while (true) {
        console.log("\n=== ATM Menu ===");
        console.log("1. Withdraw Cash");
        console.log("2. View User Details");
        console.log("3. Exit");

        const choice = await ask("Choose an option: ");

        if (choice === "1") {
            const pin = Number(await ask("Enter your PIN: "));
            try {
                await atm.withDraw(pin); 
            } catch (err: any) {
                console.error("Error:", err.message);
            }
        } else if (choice === "2") {
            atm.displayUserDetails();
        } else if (choice === "3") {
            console.log(" Thank you for using the ATM.");
            break;
        } else {
            console.log(" Invalid option. Try again.");
        }
    }

    rl.close();
}

main();
