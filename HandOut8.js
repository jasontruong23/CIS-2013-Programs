var intMin, intMax, intGuess, intRandom, intCount; // Initializing the variables used within this program

intMin=parseInt(prompt("Enter a Number greater or equal to 0 for your min number")); //Prompt the user to enter in the number they want to set at their lower limit

while (isNaN(intMin)||intMin<0){ //If user did not enter in a number or a number equal or greater than zero then the user is asked to enter it again
    intMin = parseInt(prompt("Sorry, you need a number equal or greater than 0 for your min number"));
}

intMax= parseInt(prompt("Please enter a number which is at least a "  + (intMin +2) +  " as your maximum number"));//The user is asked to enter a number at least 2 values larger than the number they selected as a min

while (isNaN(intMax)||intMax<(intMin +2)){
    intMax = parseInt (prompt("Sorry, you need to enter a number greater or equal " + (intMin +2)+ " for your minimum number"));//If the user does not eneter in a number or enter a value that is not at least two greater than their chosen min then the user is asked to enter in a number again
    }
    
    intGuess = parseInt(prompt("Please enter a number between" + " " + intMin +  " " + "and" + " " +intMax));// This is the beginning of the users guessing for the random number that was generated from their limits
    
    while (isNaN(intGuess)||intGuess < intMin||intGuess>intMax){
        intGuess = parseInt(prompt("Sorry, you need to choose a number between " + " " +intMin+ " "+ " and " + " " +intMax));//The user has to enter a number again if it is not within the limits
          }
          
          intRandom = parseInt (Math.floor(Math.random()*(intMax-intMin+1))+intMin);//The random number generator with its limits
          
intCount= 1;

while(intGuess!=intRandom){
    if (intGuess< intRandom){
        intGuess=parseInt(prompt("Your guess of " +intGuess+" is to low. Please guess again "));//Telling the user their guess is to low
        
        while(isNaN(intGuess)||intGuess<intMin ||intGuess > intMax){
            intGuess = parseint(prompt ("Sorry you need to choose a number between " + " " + intMin + " " + " and " + " " +intMax));
        }
        
    }
    
    else {
        intGuess=parseInt(prompt("Your guess of" + " " + intGuess +  " " + "is to high. Please guess again"));//Telling the user that their guess is to high
        
while (isNaN(intGuess)|| intGuess <intMin||intGuess>intMax){
    intGuess=parseInt(prompt("Sorry you need to choose a number between " + " " + inMin + " " + " and " + " " +intMax));
}
    }
    intCount++;
}
alert("Congrats you guess the number" + " " +intRandom+  " "+ "in" + " " +intCount+  " " + "attempts");//Alerts the user that they guessed the correct number and the amount of times that it took them to guess