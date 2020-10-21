var readline = require('readline-sync');

function caesar(input,shift){
    encrypted = '';
    for( var i=0; i < input.length; i++){
        num = (input[i].charCodeAt())
        if(num >= 97 && num <= 109){
            encrypted += String.fromCharCode( num + shift )
        } else if (num >= 110 &&  num <= 122){
            encrypted += String.fromCharCode( num - shift )
        }
    }
    return encrypted
}

var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
console.log("Okay, "+input+" it is")
var shift = parseInt(readline.question('How many letters would you like to shift? '));
console.log("Okay, let's shift "+shift+ " letters.")

console.log(caesar(input,shift))

// 97 - 122 //