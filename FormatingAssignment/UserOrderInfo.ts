import * as readlineSync from "readline-sync";
class User{
    userName:string;
    userEmail:string;
    constructor(name:string,email:string){
        this.userName=name;
        this.userEmail=email;
    }
}

class OrderProcessing{
    private order:string[]=[];
    placeOrder(user:User,itemName:string,quantity:number,price:number):void{
        let totalCostOfItem=this.calculateTotalCost(quantity,price);
        this.order.push("Item :"+itemName+" quantity:"+quantity+"total:"+totalCostOfItem);
        console.log("Order Placed");
        console.log(`User: ${user.userName}, Item: ${itemName}, Quantity: ${quantity}, Total: $${totalCostOfItem.toFixed(2)}`);
        if(quantity>10)
        {
            console.log("Bulk order");
            
        }
        this.sendEmail(user.userEmail, `order for ${itemName} has been placed. Total cost: $${totalCostOfItem}`);
    }

    private calculateTotalCost(quantity: number, price: number): number {
        let total = quantity * price;
        if (quantity > 5) {
            total *= 0.85; 
        }
        return total;
    }

    private sendEmail(email: string, message: string): void {
        console.log(` Sending email to: ${email}`);
        console.log(`Message: ${message}`);
    }
}
function getUserDetails(): User {
    let userName = readlineSync.question("your name: ");
    let userEmail = readlineSync.question("your email: ");
    return new User(userName, userEmail);
}
function getItemDetails(): { itemName: string; quantity: number; price: number } {
    let itemName = readlineSync.question("Enter item name: ");
    let quantity = parseInt(readlineSync.question("Enter quantity: "), 10);
    let price = parseFloat(readlineSync.question("Enter price per item: "));
    return { itemName, quantity, price };
}
function main(): void {
    let user = getUserDetails();
    let { itemName, quantity, price } = getItemDetails();
    let orderProcessor = new OrderProcessing();
    orderProcessor.placeOrder(user, itemName, quantity, price);
}

main();