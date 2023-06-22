// Task 1********
// Re-write this .map() using an arrow function:
// we can still return objects implicitly with one-line arrow functions 
// with the help of parenthesis (). We just need to wrap with parenthesis the object literal we want to return;


const carrots = ["bright orange", "ripe", "rotten"]


// function mapVegetables(x) {
//     return carrots.map(function(x) {
//         return { type: "carrot", info: x }
//     })
// }

// w/ fat arrow functions, becomes this

const mapVegetables = carrots.map(x => { return { type: "carrot", info: x } })

console.log(mapVegetables)

// Task 2
// Re-write this .filter() using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

// function filterForFriendly(x) {
//     return people.filter(function(x) {
//         return x.friendly
//     })
// }

// FAT arrow
const filterForFriendly = people.filter(x => { return x.friendly } )

console.log(filterForFriendly)


// Task 3
// Re-write the following functions to be arrow functions:

function doMathSum(a, b) {
    return a + b
}

var produceProduct = function(a, b) {
    return a * b
}

// FAT arrow function'd
const doSumMath = (a,b) => {return a+b}

var produceProduct = (a,b) => {return a*b}

console.log(doSumMath(2,3))

console.log(produceProduct(2,3))

// Task 4
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:

// Hi Kat Stark, how does it feel to be 40?
// firstName should default to "Jane"
// lastName should default to "Doe"
// age should default to 100

// Extra Credit: Use template literals to build the string

const firstName = "Aubrey";
const lastName = "Graham";
const age = 33;
const fullName = `Hey ${firstName} ${lastName} how does it feel to be ${age}?`

console.log(fullName)


// Task 5
// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
];


// function filterForDogs(arr) {
//     return arr.filter(animal => {
//         if (animal.type === "dog") {
//             return true
//         } else {
//             return false
//         }
//     })
// }

// FAT arrow function

const filterForDogs = animals.filter(x => { if (x.type === "dog"){ return true } else { return false } })

console.log(filterForDogs)

// Template Literals
// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

// Hi Herbert!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. 

let name = "Herbert"
let location = "Hawaii"
let hotelGreeting = `Hi ${name}!

Welcome to ${location}.
I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`

console.log(hotelGreeting)