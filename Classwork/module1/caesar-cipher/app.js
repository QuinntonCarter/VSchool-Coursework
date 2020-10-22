var readline = require('readline-sync');

function caesar(input,shift){
    encrypted = '';
    for( var i=0; i < input.length; i++){
    // finds ascii nums for input and defines in num var
        num = (input[i].charCodeAt())
    // sets parameters for 
        if(num >= 97 && num <= 109){
            encrypted += String.fromCharCode( num + shift )
        } else if (num >= 110 &&  num <= 122){
            encrypted += String.fromCharCode( num - shift )
        }
    }
    return encrypted
}

// ask about limiting character entry to a-z
var input = readline.question('What phrase would you like to encrypt? ', { charlist: '$<A-z>'}).toLowerCase();

//example 
console.log(`Okay, ${input} it is`)

// ask about setting min and max for integers
var shift = parseInt(readline.questionInt('How many letters would you like to shift? ', { length: '$<1-13>' }));
console.log(`Okay, lets shift ${shift} letters`)


console.log(`Encrypted: ${caesar(input,shift)}`)
