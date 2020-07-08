let arr = [1, 5, 3, 2, 4]
let string = [
{
    name:"snek",
    age: 100
}, 
{
    name:"eve",
    age:21
}, 
{
    name:"apples",
    age: .5
}
]


// 1) Sort an array from smallest number to largest
    // arr.sort(function(a,b){
    //     return a - b
    // })
    // console.log(arr)

// 2) Sort an array from largest number to smallest
    // arr.sort(function(b,a){
    //     return a - b
    // })
    // console.log(arr)


// 3) Sort an array from shortest string to longest
    // string.sort(function(a,b){
        
    //     return a.name.length - b.name.length
    // })
    // console.log(string)


// 4) Sort an array alphabetically --- explained in notes--->
    // string.sort(function(a,b){
    //     if(a.name < b.name) { return -1; }
    //     if(a.name > b.name) { return 1; }
    //     return 0;
    // })
    // console.log(string)

// 5) Sort the objects in the array by age
string.sort(function(a,b){
    return a.age - b.age
})

console.log(string)