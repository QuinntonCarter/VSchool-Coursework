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

let sorter = peopleArray.sort(function(final,current) {
    if (final.firstName < current.firstName) { 
        return -1
    }
    if (final.firstName > current.firstName) { 
        return 1 
    } return sorter
} if(peopleArray.age <= 18 ){
    return peopleArray
})

// build reduce function with sorter as arg in some capacity

