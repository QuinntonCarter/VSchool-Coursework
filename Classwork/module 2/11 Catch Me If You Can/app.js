// 1a) Write a function that returns the sum of two numbers. 
// Throw an error if either argument is not of the data type 'number':

function add(x,y){
    x = parseInt(x)
    y = parseInt(y)
    sum = x + y
    if (isNaN(x) || isNaN(y)){
        throw new Error('One or more input is not a number');
    } if (sum === NaN){
        throw new Error('Output is not a number');
    } else {
    return sum
    }
}

try {
    add(2,3)
    add('were','gild')
    console.log(sum)
} catch(error) {
    console.log('Something went wrong! '+error)
} finally {
    console.log('always running in the back')
}


// 1b) Call the sum function inside a try block using "1" and "2" as arguments. 
// Use console.log within a catch block to inform the user of the error.



// 2a) Given a user object, write a function called 
// login that takes a username and password as parameters. 
// Throw an error if either of them don't match. 
// Otherwise, log to the console a message saying "login successful!"



// 2b) Call the login function within a try block. In one instance 
// use the correct credentials, and in another use incorrect ones. Make 
// sure you see the appropriate message!