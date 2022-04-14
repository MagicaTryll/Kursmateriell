//function, parentheses() where parameters go, then brackets {}.The

//function you want your code to do goes between these brackets.

//Function nameOfFunction(parameter1, parameter 2) {


//Built in functions

//JavaScript has a few built in functions with their own built in returns.A few examples are:

//.toFixed(): This

//function returns a number with as many decimals as specified within the parentheses.
//Example:

let x = 3.1415926535;

x = x.toFixed(2);

console.log(x);

//.toPrecision(): This

//function returns a rounded number up to the number of digits specified within the parentheses.
//Example:
//let x = 4.457999;

//x = x.toPresision(3);

//console.log(x);

//.concat(): puts two or more strings together into a new string.
//Example:

//let str1 = “Hang him”;
//let str2 = “or wait until I get there”;

//str3 = str1.concat(str2);

//console.log(str3);
//.blink(): makes a string blink as
//if it was in a BLINK tag.
//Example:

//blinker = “look ma, I 'm blinking”

//console.log(blinker.blink());

// Custom functions

// These are functions you make from scratch.This will be most of the functions you use.

// Anonymous functions

// These are functions without names.They are made by writing a normal

// function, but leaving out the name part.This results in that the

// function itself is not accessible after it 's been made, but if it is the value held in a variable it can still be used later. As you probably have guessed, these functions are best if used right away.

// Invocation

// This is also called to“ call a

// function”.This is when a

// function is used within the script.

// Function functionName(parameter) {
//     return something;
// }

// functionName();

// Parameters & Arguments

// Parameters in JavaScript doesn 't need to be as specific data type so the type fed in to the function is not checked. The being said, should you not feed any parameters into the function the parameters will be set as undefined. 


// Return values

// Return values are used
// if you want the

// function to give you a certain“ value”, this doesn 't need to be a numerical value. When the word return is reached JavaScript will stop executing the function and return the information within the return statement to whatever invoked the function.

// Let x = multiplying(4, 3);

// function multiplying(a, b) {
//     return a * b;
// };