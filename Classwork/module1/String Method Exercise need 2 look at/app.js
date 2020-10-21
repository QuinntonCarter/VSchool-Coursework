// 1 // Make a function that will return any given 
// string into all caps followed by the same 
// string all lowercase.

// readline ver

var readline = require('readline-sync');
var input = readline.question('What phrase would you like to change? ').toLowerCase();

console.log(input+"\n"+input.toUpperCase())

// ver 2
var greeting = "Hark! Who goes there??"
var low = greeting.toLowerCase() 
var cap = greeting.toUpperCase()
var both = cap + "\n" + low;

console.log(both)

// 2 // Make a function that returns a number half the length, and rounded down. 
// You'll need to use Math.floor().
// Math.floor rounds down and Math.ceil rounds up
function halfAndRound(x) {
    return Math.floor(x/2)
};

console.log(halfAndRound(4.7))

// 3 ** ask to clarify number parsing* // 
// Make a function that uses slice() and 
// the other functions you've written to return the first half of the string.

// base function
function firstHalf(x, base) {
    var parsed = Number.parseInt(x,base);
    if (Number.isNan(parsed)) {
        return 0;
    }
    return parsed * 10;
}

// function firstHalf(x, base) {
//     Number.parseInt(x, base)
// }

console.log(firstHalf("Nascar"))


// 4 *** // Make a function that takes a string and returns that string 
// where the first half is capitalized, and the second half is lower cased.
