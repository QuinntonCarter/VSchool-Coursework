/* Prelim 1 Write a for loop that prints to the console the numbers 0 through 9. */
/*
for (var i = 0; i< 10; i++) {
    console.log(i);
}
*/

/* 2 Write a for loop that prints to the console 9 through 0 */
/*
/start at 9 and as long as the numbder is greater than -1, count backwards until can't
for (var i = 9; i> -1; i--) {
    console.log(i);
}
*/

/* 3 Write a for loop that prints these fruits to the console */
/*
var fruitArray = [
    {
        name: "banana",
    },
    {
        name: "orange",
    },
    {
        name: "apple",
    },
    {
        name: "kiwi",
    },
]

for (var i = 0; i < 4; i++) {
    console.log(fruitArray[i].name);
}
*/

/* Bronze */
/* */
/* 1 Write a for loop that will push the numbers 0 through 9 to an array. */

// let array = [];

// for (let i = 0; i < 1; i++) {
// array.push(0,1,2,3,4,5,6,7,8,9)
// }
// console.log(array)


/* 2 Write a for loop that prints to the console only even numbers 0 through 100 */


// for (var x = 0; x <= 100; x++)
// {
// if ( x % 2 === 0) {
//     console.log(x);
// }
// }



/* 3 Write a for loop that will push every other fruit to an array */

// var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
// var array = []
// for (var i = 0; i < 6; i+=2) {
//     array.push(fruit[i]);
// }
// console.log(array)


/* Silver */
/* 1. Write a loop that will print out all the names of the people in the array */
/*
var peopleArray = [
    {
    name: "Harrison Ford",
    occupation: "Actor"
    },
    {
    name: "Justin Bieber",
    occupation: "Singer"
    },
    {
    name: "Vladimir Putin",
    occupation: "Politician"
    },
    {
    name: "Oprah",
    occupation: "Entertainer"
    }
]

for ( var i = 0; i < 4 ; i++ ) {
    console.log(peopleArray[i].name)
}
*/

/* 2 Write a loop that pushes the names into a names array, and the occupations into an occupations array */

// var peopleArray = [
//     {
//     name: "Harrison Ford",
//     occupation: "Actor"
//     },
//     {
//     name: "Justin Bieber",
//     occupation: "Singer"
//     },
//     {
//     name: "Vladimir Putin",
//     occupation: "Politician"
//     },
//     {
//     name: "Oprah",
//     occupation: "Entertainer"
//     }
// ];

// let nameArray = []
// let occupationArray = []

// for ( let i=0 ; i < 4 ; i += 2 ) {
//     occupationArray.push(peopleArray[i].occupation)
//     nameArray.push(peopleArray[i].name)
// }

// console.log(occupationArray)
// console.log(nameArray)

// Gold Medal ////// / / / / // / / / / / / / / /
//////////
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
var newArray = [];

vegetables.pop()
console.log(vegetables)
fruit.shift()
console.log(fruit)
let orangeIndex = fruit.indexOf('orange')
console.log(orangeIndex)
fruit.push(orangeIndex)
console.log(fruit)
var veggieLength = vegetables.length
vegetables.push(veggieLength)
console.log(vegetables)
var food = fruit.concat(vegetables)
console.log(food)
var sliced = food.slice(4)
console.log(sliced)
var rewind = sliced.reverse()
console.log(rewind.toString())
//////////////////
