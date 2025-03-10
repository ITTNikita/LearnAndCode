class User{
    name:string;
    email:string;
    constructor(name:string,email:string)
    {
        this.name=name;
        this.email=email;
    }
}
class OrderProcessing{
    orderDetails(user:User,product:string,quantity:number,price:number):void{
        console.log("User:"+user.name+" user email:"+user.email+"ordered:"+quantity+" "+product+" "+"at price"+ price);
    }
}
const user = new User("Nikita", "nikita@gmail.com");
const orderProcessing = new OrderProcessing();
orderProcessing.orderDetails(user, "Laptop", 6, 900);