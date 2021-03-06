/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)


var votingAge = 19;

if (votingAge > 18) {
  console.log(true);
} else {
  console.log(false);
}



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

var foo = 0;
var boo = 6;

if (foo < boo) {
  foo = boo;
}
console.log(foo)



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method


console.log(Number("1999"))


//Task d: Write a function to multiply a*b 

function doMultiplication(param1, param2) {
    return param1*param2;
  }
  doMultiplication(2,5)




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(yourAge) {
    return yourAge * 7
  }
  dogYears(28)



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

function dogFoodAmount(weight, age) {

    var value = 0;
    // Dog
      if (age >= 1) {
        if (weight <= 5) {
          value = 0.05 * weight;
        } else if (weight<=10 && weight >= 6) {
          value = 0.04 * weight;
        } else if (weight<=15 && weight>= 11) {
          value = 0.03 * weight;
        } else {
          value = 0.02 * weight;
        }
      } else {
        if (age >= 2/12 && age<= 4/12) {
          value = 1 * weight;
        } else if (age >= 4/12 && age<= 7/12) {
          value = 0.05 * weight;
        } else if (age>= 7/12 && age<= 1) {
          value = 0.04 * weight;
        }
      }
      console.log(value);
      return (value)
    }
    
    dogFoodAmount(15, 1)


/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

  
// Source: https://stackoverflow.com/a/29246176/1291940
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function game(choice) {
  
    let randomNumber = randomInteger(1,3);
    var computerChoice = 0;
  
    if (randomNumber === 1) {
      computerChoice = "Scissors";
    } else if (randomNumber === 2) {
      computerChoice = "Rock";
    } else {
      computerChoice = "Paper";
    }
    console.log("Computer picked" + " "+ computerChoice)
  
  
    if (computerChoice === "Scissors") {
      if (choice === "Scissors") {
        console.log("Tie.")
      } else if (choice === "Rock") {
        console.log("You win.")
      } else if (choice === "Paper") {
        console.log("You lose.")
      }
    }
  
      if (computerChoice === "Rock") {
      if (choice === "Scissors") {
        console.log("You lose.")
      } else if (choice === "Rock") {
        console.log("Tie.")
      } else if (choice === "Paper") {
        console.log("You win.")
      }
    }
  
      if (computerChoice === "Paper") {
      if (choice === "Scissors") {
        console.log("You win.")
      } else if (choice === "Rock") {
        console.log("You lose")
      } else if (choice === "Paper") {
        console.log("Tie.")
      }
    }
  }
  
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles


function KMToMiles(input) {
    return (input / 1.609)
  }
  KMToMiles(1)


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  

function FeetToCM(input) {
    return (input * 30.48)
  }
  FeetToCM(1)


/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(startingNumber) {

  while (startingNumber > 0) {

    console.log(startingNumber.toString() + " bottles of soda on the wall " + startingNumber.toString() + " bottles of soda, take one down pass it around " + (startingNumber-1).toString() + " bottles of soda on the wall");
    startingNumber = startingNumber - 1;
  }
}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  

function grade(score) {
  var finalScore = "";

  if (score >= 90) {
    finalScore = "A";
    } else if ( score >= 80 && score < 90) {
    finalScore = "B";
  } else if ( score >= 70 && score < 80) {
    finalScore = "C";
  } else if ( score >= 60 && score < 70) {
    finalScore = "D";
  } else {
    finalScore = "F";
  }

  return finalScore;
}
  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





