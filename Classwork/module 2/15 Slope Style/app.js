// 1) Use the Rest Operator to help this function return an array of 
// animals, no matter how many animals are passed to it:

// function collect(...arr) {  
//     return arr
// }
// FAT arrow'd
const collect = (...arr) => arr
console.log(collect("dog", "cat", "mouse", "jackolope", "platypus"));


// 2) Write a function that returns a food object with the array names 
// as properties using Object Literals:

// combineFruit(["apple", "pear"],
//             ["cake", "pie"],
//             ["carrot"])
// // expected result=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//     }

function combineFood(fruits,sweet,veggies){
    // creates object literals for intake variables with labels
    const food = {fruit: fruits, sweets: sweet, vegetables: veggies};
    // returns food without causing 'undefined' by using return
    return food
}
// calls for console log of function with arrays as arguments
console.log(combineFood(["apple", "pear"],["cake", "pie"],["carrot"]))



// 3) Use destructuring to use the property names as variables. 
// Destructure the object in the parameter:
// should return
//     return `We're going to have a good time in ${location} for ${duration}`
// }

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
};

const {location, duration} = vacation
console.log(`We're going to have a good time in ${location} for ${duration}`)


// // Use destructuring to make this code ES6:

    const [firstItem, secondItem, thirdItem, fourthItem] = ['lighter', 'boltcutters', 'marker', 'traffic cone'];
    console.log(firstItem)


// 4) Write destructuring code to assign variables that will help us 
// return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    // declares variables for selection within argument array
    const [firstFav, secondFav, thirdFav, fourthFav, fifthFav] = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];
    // returns selections within new string
    return "My top three favorite activities are " + firstFav + ", " + secondFav + ", and " + thirdFav+"!"
}

console.log(returnFavorites(favoriteActivities))
