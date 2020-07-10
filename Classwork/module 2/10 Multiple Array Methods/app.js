// write a function that:

// 1. Returns a list of everyone older than 18, which is

// 2. sorted alphabetically by last name, and where

// 3. each name and age is embedded in a string that 
// looks like an HTML <li> element.



var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

let sorter = peopleArray.sort(function(a,b) {
    if (a.firstName < b.firstName) { 
        return -1
    }
    if (a.firstName > b.firstName) { 
        return 1 
    }
})

// build reduce function with sorter as arg in some capacity

let megafunk = peopleArray.reduce(function(final,people){
    if(peopleArray.age >= 18){
        final.push(people)
    } return final
}, sorter)

console.log(megafunk)