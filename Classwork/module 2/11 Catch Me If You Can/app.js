// 1a) Write a function that returns the sum of two numbers. 
// Throw an error if either argument is not of the data type 'number':

function add(x,y){
    parseInt(x)
    parseInt(y)
    sum = x + y
    if (sum !== NaN){
    return sum
    }
    else if (sum == NaN){
        throw new Error("Something went wrong")
    }
}

try {
    add()
    console.log("ran try")
} catch(error) {
    console.log("An error occured: " +error)
    console.log("ran catch")
} finally {
    console.log("always running in the back")
}

console.log(add("sdf",3))

// 1b) Call the sum function inside a try block using "1" and "2" as arguments. 
// Use console.log within a catch block to inform the user of the error.



// 2a) Given a user object, write a function called 
// login that takes a username and password as parameters. 
// Throw an error if either of them don't match. 
// Otherwise, log to the console a message saying "login successful!"



// 2b) Call the login function within a try block. In one instance 
// use the correct credentials, and in another use incorrect ones. Make 
// sure you see the appropriate message!