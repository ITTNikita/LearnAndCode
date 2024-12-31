def isValid(guessNumber):
    if guessNumber.isdigit() and 1<= int(guessNumber) <=100:
        return True
    else:
        return False

def main():
    randomNumber=random.randint(1,100)
    isCorrect=False
    userGuess=input("Guess a number between 1 and 100:")
    attempt=0
    while not isCorrect:
        if not isValid(userGuess):
            userGuess=input("I wont count this one Please enter a number between 1 to 100")
            continue
        else:
            attempt+=1
            userGuess=int(userGuess)

        if userGuess<randomNumber:
            userGuess=input("Too low. Guess again")
        elif userGuess>randomNumber:
            userGuess=input("Too High. Guess again")
        else:
            print("You guessed it in",attempt,"guesses!")
            isCorrect=True


main()