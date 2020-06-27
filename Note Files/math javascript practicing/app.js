// generates random number and returns value multiplied by whatever you choose

// var sum = Math.floor(Math.random())
    // Math.floor(Math.random() * 5)

    // console.log(Math.floor(Math.random() * Math.floor(max)))

// add functions that *study*
// accepts multiple arguments and returns value //
// <---- 1 ----->
// function add(param1, param2) {
//     //  write code here.
//     const argumentArray = [...arguments]
//     const sum = argumentArray.reduce((acc, elem) => acc + elem, 0)
//     return sum
// }


// <---- 2 ---->
function add(...param) {
    return param.reduce((x, y) => x + y) 
}

console.log(add(4,2,1,5,6,7))