let arr = [1,2,3,4,5];
let words = ['cat','bird','naruto','akira'];
let people = [
    {
    name: "Drake",
    inthaclub: true,
    age: 15
    },
    {
        name: "Kevin Gates",
        inthaclub: true,
        age: 17
    },
    {
        name: "noname",
        inthaclub: false,
        age: 22
    },
    {
        name: "Denzel Curry",
        inthaclub: false,
        age: 24
    },
    {
        name: "Father",
        intheclub: false,
        age: 25
    }
]


// 1) Given an array of numbers, 
// return a new array that has only the numbers that are 5 or greater.

// const result = arr.filter(function(num){
// if(num >= 5){
//     return num
// }
// })
// console.log(result)

// 2) Given an array of numbers, 
// return a new array that only includes the even numbers.

// const result = arr.filter(function(num){
//     if(num % 2 === 0){
//         return num
//     }
// })
// console.log(result)

// 3) Given an array of strings, return a new array that 
// only includes those that are 5 characters or fewer in length

// const result = words.filter(function(words){
//     if(words.length <= 5){
//         return words
//     }
// })
// console.log(result)

// 4) Given an array of people objects, return a new array 
// that has filtered out all those who don't belong to the club.
//     const result = people.filter(function(people){
//         if(people.inthaclub === true){
//             return people.name
//         } else {
//             console.log(people.name+" isn't in the club..")
//         }
//     })
// console.log(result)

// 5) Make a filtered list of all the 
// people who are old enough to see The Matrix (older than 18)
// const result = people.filter(function(people){
//     if (people.age >= 17){
//         return people.name
//     }
// })
// console.log(result)
