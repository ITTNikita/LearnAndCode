import readlineSync from 'readline-sync';

export class UserInputService {
    public getUserInput(): string {
        return readlineSync.question('Enter a place name: ').trim();
    }
}
