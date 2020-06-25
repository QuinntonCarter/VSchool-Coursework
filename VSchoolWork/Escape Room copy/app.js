// Write a game that lets a user escape a room. 
// The character finds him/herself locked in a room. 
// In order to escape the room, your character needs to find 
// the key in the room and then open the door. 
// There's also a hole in the wall in the room. 
// If your character puts his hand in the hole, he dies.

// Constructs backend
const readline = require("readline-sync");
var options = ["Search the opening in the tile","Search for the key","Try opening the door"];

function died(){
        console.log("You are stung by a scorpion and succumb to the venom! You died.")
    };
function findKey(){
    console.log("You find a key wedged beneath the baseboards of the room!"),
    pocket.push("Rusty key")
};
function escape(){
    console.log("You use the key to unlock the door and escape!")
};
function noKey(){
    console.log("You need a key to unlock the door..")
};

// This data runs intro//
var wake = readline.keyInPause("You open your eyes in a dark room, dim light creeps in...");
var name = readline.keyInPause("Slowly allowing you to make sense of your surroundings...");
var room = readline.keyInPause("The room is dark but soft light creeps through a square window on a door to your left..");
var keys = readline.keyInPause("You need a key.. Your pockets are empty.");
var wallHole = readline.keyInPause("Still laying on the cold, tile floor, you turn to your right and notice a hole in the tile.. Could the key be in there?");
// Player + Objects
const pocket = [];
// menu ---
// This var/const gives a condition for the while loop to adhere to in order to remain active
let isPlaying = true
// This while loop keeps the menu open until the game is complete //
while (isPlaying){
    // Input is reading key selections from this options menu
    input = readline.keyInSelect(options, "What will you do?")
    // if key 1 (index 0) is selected
    if (input === 0) {
        // Execute this code: function() ((as defined above)), console.log("text contained within"), break ::stop:: the running code
        died()
        console.log("THE END. Reload to try again.")
        break
        // Or else-if key 2 (index 1), run this code
    } else if (input == 1) {
        findKey()
        // Or else-if key 3 (index 2), run this code
    } else if(input === 2) {
        noKey()
        // Nested within key 3 (index 2) response, if you have the key, you can escape
        if (pocket.includes("Rusty key")) {
            escape()
            break
    };}
    
}