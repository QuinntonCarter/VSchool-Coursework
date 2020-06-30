var readline = require("readline-sync");
var inventory = []

// Battle Menu Options //
function tryToFlee() {
    var sum = Math.floor(Math.random * 2)
    if (sum === 1) {
        readline.keyInPause("The enemy blocks your path!")
        console.log(battleMenu())
    } else {
        return ("You and Felicia stumble over one another into the night!")
        console.log(walk())
    }
}

function attack() {
    var sum = Math.floor(Math.random() * 2)
    if (sum === 0){
        console.log("reg hit")
        return "damage amount placeholder"
    } else {
        console.log("crit hit")
        return "damage amount placeholder"
    }
}

// Battle Menu //

var battleMenu = function() {
        let input = readline.keyInSelect(["Flee", "Attack"])
        if (input === 0){
        console.log(tryToFlee())
        } else if (input === 1){
        console.log(attack())
        } else if (input === 2){
            return "Invalid input"
        }
    }

// Walk Function //
function walk() {
    var sum = Math.floor(Math.random()* 3)
    if (sum === 0){
        return "You make your way through the corridors"
    } else if (sum/2 === 2){
        return "test"
    } else if (sum === 1) {
        return "Your footsteps echo through the halls"
    }
}

//  ------------------------Game Start------------------------------ //
let rpg = true
while (rpg) {
        readline.keyInPause("Welcome to the dungeon")
        var playerName = readline.question("What's your name?");
        readline.keyInPause("Howdy "+playerName)
        var command = readline.keyIn("*PRESS W TO WALK*")

        let explore = true

        while (explore) {
            if (command === "w") { 
                console.log(walk())
                var command = readline.keyIn("*PRESS W TO WALK*")
            } else if (command !== "w") {
                console.log("Wrong button "+playerName)
                var command = readline.keyIn("*PRESS W TO WALK*")
            }
        }
    }