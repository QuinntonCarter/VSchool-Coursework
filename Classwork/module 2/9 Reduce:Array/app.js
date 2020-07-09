let numarr = [1, 2, 3, 4, 50, 6, 7, 8, 9, 10]


// 1) Turn an array of numbers into a total of all the numbers
// var total = numarr.reduce(function(sum,a){
//     sum += a
//     return sum
// })
// console.log(total)

// *** 2) Turn an array of numbers into a long string of all those numbers. **ask about syntax
// const result = numarr.reduce(function(final, current){
//     final.push(current)
//     return final

// },[])

// console.log(JSON.stringify(result.join("")))

// 3) Turn an array of voter objects into a count of how many people voted
let voters = [
{
    name: "Cletus",
    voted: false
},
{
    name: "Bertha",
    voted: true
},
{
    name: "Marcus",
    voted: true
},
{
    name: "Darell",
    voted: true 
}
]

// let result = voters.reduce(function(final,voter){
// if(voter.voted){
//     final++
// } return final
// }, 0)
// console.log(result)

// 4) Given an array of all your wishlist items, figure out 
//      how much it would cost to just buy everything at once

let wishlist = [
{
    item: "Sekiro",
    price: 54.99
},
{
    item: "Record Player",
    price: 249.99
},
{
    item: "Headphones",
    price: 149.99
},
{
    item: "Vinyl",
    price: 129.99
},
]
// arg1 gathers vals, arg2 iterates
// let total = wishlist.reduce(function(final, wish){
//     return final + wish.price
// // forgetting the comma before the iteration start 
// // val will break code, every function is a closure, closures used before data you strted with
//  // so.. must be "},0)"
// },0)
// console.log(total)

// 5) Given an array of arrays, flatten them into a single array
var arrayofarr = [
    ["hummus"],
    [1,2,3,4],
    ["work"]
]

// let result = arrayofarr.reduce(function(final,current){
//     // creates variable that concats all arr for push
//     let three = final.concat(current)
//     // push to [] outside of function
//     three.push()
//     return three
// },[])

// console.log(result)

// 6) Given an array of potential voters, return an object 
//      representing the results of the vote
let votecount = voters.reduce(function(final,voter){
    if(voter.voted){
        final.didVote++
    } else {
        final.didntVote++
    }
    return final
}, { didVote: 0, didntVote:0})

console.log(votecount)

