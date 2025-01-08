import random
def fun(totalNumberOfSides):
    rollingNumber=random.randint(1, totalNumberOfSides)
    return rollingNumber


def main():
    totalNumberOfSides=6
    rolling=True
    while r1:
        readyToStart=input("Ready to roll? Enter Q to Quit")
        if readyToStart.lower() !="q":
            rollingNumberOnSide=fun(totalNumberOfSides)
            print("You have rolled a",rollingNumberOnSide)
        else:
            rolling=False



            