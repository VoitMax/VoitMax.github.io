//Variables 

//Create a Variable: var
var favoriteFood = "pizza";
var numOfSlices = 8;
console.log(favoriteFood);
console.log(numOfSlices);

//Create a Variable: let
let changeMe = true;
changeMe = false;
console.log(changeMe);

//Create a Variable: const
const entree = "Enchiladas";
console.log(entree);
//entree = "Tacos" --> TypeError

//Mathematical Assignment Operators
let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;

// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp);
console.log('The value of powerLevel:', powerLevel);
console.log('The value of multiplyMe:', multiplyMe);
console.log('The value of quarterMe:', quarterMe);

//The Increment and Decrement Operator
let gainedDollar = 3;
gainedDollar++;
let lostDollar = 50;
lostDollar--;

//String Concatenation with Variables
let favoriteAnimal = "dog";
console.log("My favorite animal:" + " " + favoriteAnimal)

//String Interpolation
const myName = "Max";
const myCity = "Innsbruck";
console.log(`My name is ${myName}. My favorite city is ${myCity}.`)

//typeof operator
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable)
newVariable = 1
console.log(typeof newVariable)