def isArmstrongNumber(number):
    # Initializing Sum and Number of Digits
    sum = 0
    numberOfDigit = 0

    # Calculating Number of individual digits
    temporary = number
    while temporary > 0:
        numberOfDigit = numberOfDigit + 1
        temporary = temporary // 10

    # Finding Armstrong Number
    temporary = number
    for number in range(1, temporary + 1):
        remainderNumber = temporary % 10
        sum = sum + (remainderNumber ** numberOfDigit)
        temporary //= 10
    return sum


# End of Function

# User Input
userInputNumber = int(input("\nPlease Enter the Number to Check for Armstrong: "))

if (userInputNumber == isArmstrongNumber(userInputNumber)):
    print("\n %d is Armstrong Number.\n" % userInputNumber)
else:
    print("\n %d is Not a Armstrong Number.\n" % userInputNumber)