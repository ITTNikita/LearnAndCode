import random

RANGE_STARTING_NUMBER=1
RANGE_ENDING_NUMBER=5

def isValidNumber(gussedNumber):
     if (gussedNumber.isdigit() and (RANGE_STARTING_NUMBER <= int(gussedNumber) <= RANGE_ENDING_NUMBER)):
        return True
     else:
        print("please enter the valid number")
        return False
           

def getUserGuess():
    while True:
        userInputNumber=input("Guess the number between 1 and 100")
        if(isValidNumber(userInputNumber)):
            return int(userInputNumber)    

def checkNumber(userGuessNumber,correctNumber):
    if userGuessNumber < correctNumber:
        userGuessNumber = input("Too low. Guess again")
        return False
    elif userGuessNumber > correctNumber:
        userGuessNumber = input("Too High. Guess again")
        return False
    else:
        return True
    


def main():
    correctNumber=random.randint(RANGE_STARTING_NUMBER,RANGE_ENDING_NUMBER)
    isGuessedNumberIsCorrect=False
    numberOfGuess=0
    while not isGuessedNumberIsCorrect:        
        userGuessNumber=getUserGuess()
        numberOfGuess+=1
        isGuessedNumberIsCorrect=checkNumber(userGuessNumber,correctNumber)
    print("total number of guess",numberOfGuess)

main()   

    
        
       
