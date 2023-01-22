criminalrecord = bool(True)
mincredit = 630
minincome = 100000
criminals = ["John", "Obi", "Tolu","Precious"]


name = input('Enter your name: ')
print("\n")
if name not in criminals:
    print("Not Eligible for loan (criminal)")
else:
    creditscore = input('What is your credit score: ')
    print("\n")
    if creditscore < mincredit:
        print("Not Eligible for loan (low credit)")
    else:
        income = input("What is your yearly income in USD: ")
        if income < minincome:
            print("Not Eligible for loan (low income)")
        else:
          loan =  input("How much loan do you want: ")
          print("Loan Granted")

        
    



