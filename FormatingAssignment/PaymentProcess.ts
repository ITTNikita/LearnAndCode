import * as readlineSync from "readline-sync";

class PaymentProcessing {
    processPayment(cardType: string, amount: number, cardHolder: string, cardNumber: string): void {
        if (!this.isValidCardType(cardType)) {
            console.log("Unknown Payment Method. Please enter 'Credit' or 'Debit'.");
            return;
        }

        console.log(` Processing ${cardType} Card payment of $${amount}`);
        
        if (amount > 1000) {
            console.log("High-value transaction alert!");
        }

        console.log(`Payment Completed for ${cardHolder} (Card Ending: ${cardNumber.slice(-4)})`);
    }

    private isValidCardType(cardType: string): boolean {
        return cardType === "Credit" || cardType === "Debit";
    }
}

function getPaymentDetails(): { cardType: string; amount: number; cardHolder: string; cardNumber: string } {
    const cardType = readlineSync.question("Enter payment type (Credit/Debit): ");
    const amount = parseFloat(readlineSync.question("Enter payment amount: "));
    const cardHolder = readlineSync.question("Enter cardholder name: ");
    const cardNumber = readlineSync.question("Enter card number: ");

    return { cardType, amount, cardHolder, cardNumber };
}

function main(): void {
    console.log("\n🛒 Welcome to the Payment Processing System!\n");

    const { cardType, amount, cardHolder, cardNumber } = getPaymentDetails();
    const paymentProcessor = new PaymentProcessing();
    paymentProcessor.processPayment(cardType, amount, cardHolder, cardNumber);
}


main();
