var readline = require("readline-sync");
var inventory = []

// Enemy Class //
function enemy (name, health, attack, voiceSound) {
    this.name = name
    this.health = health
    this.attack = attack
    this.voiceSound = voiceSound
    }

// Enemy Variables //
    var mid =  {
        name:"Skeleton", 
        health: 7, 
        attack: 5, 
        voiceSound: "*bones clanking*"
    }
    var boss = {
        name: "Cyclops", 
        health: 27, 
        attack: 10, 
        voiceSound: "RAAAAAGGHHH!"
    }
    var low = {
        name: "Rat",
        health: 4,
        attack: 2,
        voiceSound: "*squeak* *squeak*"
    }

// Battle Menu Options //
function tryToFlee() {
    var sum = Math.floor(Math.random() * 2)
    if (sum === 0){
        readline.keyInPause("The enemy blocks your path!")
        battleMenu()
    } else {
        readline.keyInPause("You rush down an adjacent corridor and escape!")
        walk()
    }
}

function attack() {
    var sum = Math.floor(Math.random() * 3)
    if (sum === 0){
        console.log("Hit!"+sum)
        readline.keyInPause("weapon reg damage placeholder")
        battleMenu()
    } else if (sum === 2){
        console.log("Hit!"+sum)
        readline.keyInPause("weapon reg damage placeholder")
        battleMenu()
    } else {
        console.log("THWWAAAACK!!")
        readline.keyInPause("weapon crit damage placeholder"+sum)
        battleMenu()
    }
}

// Walk events //
function enemyAppear() {
    var sum = Math.floor(Math.random() * 2)
    if (sum === 0){
        return low.name
    } else if (sum === 1){
        return boss.name
    } else {
        return mid.name
    }
}

function findItem() {
    var sum = Math.floor(Math.random() * 3)
    if (sum === 0){
        readline.keyInPause("You found " + + "!")
        placeholderitem.push
    } else if (sum === 1) {

    }
}

// Battle Menu //
function battleMenu() {
        let input = readline.keyInSelect(["Flee", "Attack"])
        if (input === 0){
        tryToFlee()
        } else if (input === 1) {
        attack()
        } else {
            return "Invalid input"
        }
    }

// Walk Function //
function walk() {
    var sum = Math.floor(Math.random()* 3)
    if (sum === 0){
        console.log("You make your way through the dimly lit corridors")
    } else if (sum === 2){
        readline.keyInPause(enemyAppear()+" appears!")
        battleMenu()
    } else if (sum === 1) {
        console.log("Your footsteps echo through the halls")
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
                walk()
                var command = readline.keyIn("*PRESS W TO WALK*")
            } else if (command !== "w") {
                console.log("Wrong button "+playerName)
                var command = readline.keyIn("*PRESS W TO WALK*")
            }
        }
    }