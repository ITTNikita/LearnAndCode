class User {
    userName: string;
    userEmail: string;

    constructor(name: string, email: string) {
        this.userName = name;
        this.userEmail = email;
    }
}

class ShowInfo { 
    getInfo(user: User) {
        console.log(`User Name: ${user.userName}`);
        console.log(`Email: ${user.userEmail}`);
    }
}

const user = new User("Nikita", "nikita@gmail.com");
const userInfo = new ShowInfo(); 

userInfo.getInfo(user); 
