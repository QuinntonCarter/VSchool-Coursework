var readline = require("readline-sync");
var inventory = [ ];
var hP = 30;
// const textDisplay = document["forText"]

// textDisplay.addEventListener('submit', function {

// })

// readline.getRawInput("Print", console.log(playerName+hP+(...inventory)))

// Enemy Class //
// function enemy (name, health, attack, voiceSound) {
//     this.name = name
//     this.health = health
//     this.attack = attack
//     this.voiceSound = voiceSound
//     }

//  Items Variables //
// var items = {
//     bSword = {
//         name: "Broken Sword",
//         damage: 4
//     },
    
//     sSword = {
//         name: "Steel Sword",
//         damage: 9
//     },
    
//     // Health //
//     potion = {
//         name: "Health Potion",
//         replenish: function(...hP) {
//             hP.reduce(10,hP) => 10+hP
//         }
//     }
// }
        

// or

// var bSword = {
//     name: "Broken Sword",
//     damage: 4
// }

// var sSword = {
//     name: "Steel Sword",
//     damage: 9
// }

// //  Item Variables //
// var potion = {
//     name: "Health Potion",
//     replenish: function(hP) {
//         hP+10
//     }
// }

    


// Enemy Variables //

// var enemies = {
//     mid =  {
//         name:"Skeleton", 
//         health: 7, 
//         attack: 5, 
//         voiceSound: "*bones clanking*"
//     },
//     boss = {
//         name: "Cyclops", 
//         health: 27, 
//         attack: 10, 
//         voiceSound: "RAAAAAGGHHH!"
//     },
//     low = {
//         name: "Rat",
//         health: 4,
//         attack: 2,
//         voiceSound: "*squeak* *squeak*"
//     }
// }

// or 

var mid =  {
    name:"Skeleton", 
    health: 17, 
    attack: 5, 
    voiceSound: "*bones clanking*"
}
var boss = {
    name: "Cyclops", 
    health: 37, 
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
function tryToFlee(enemy) {
    var sum = Math.floor(Math.random() * 2)
    if (sum === 0){
        readline.keyInPause(`The ${enemy.name} blocks your path!`)
        // enemyCounter()
        // battleMenu()
    } else {
        enemy.health=0
        readline.keyInPause("You rush down an adjacent corridor and escape!")
        return walk()
    }
}

function attack(enemy) {
    var sum = Math.floor(Math.random() * 2)
    if (sum === 0){
        let dam = enemy.health-=10
        console.log("Hit!"+sum)
        readline.keyInPause(`${dam}`)
        return dam
    } else if (sum === 2){
        let dam = enemy.health-=10
        console.log("Hit!"+sum)
        readline.keyInPause(`${dam}`)
        return dam
    } else {
        let dam = enemy.health-=20
        console.log("THWWAAAACK!!")
        readline.keyInPause(`${enemy.name} took 20 damage!`)
        return dam
    }
}

// enemy attack/counter// 
function enemyAttack(enemy) {
    var sum = Math.floor(Math.random * 2)
    if (sum === 0){
        console.log("The enemy attacks!")
        readline.keyInPause(enemy.name+ "dbl attack damage placeholder")
        hP-=enemy.attack*2
    } else if (sum === 2){
        console.log("The enemy attacks!")
        readline.keyInPause(enemy.name+ "missed placeholder")

    } else {
        console.log("The enemy lunges toward you!")
        readline.keyInPause(enemy.name+ "standard damage")
        hP-=enemy.attack
    }
}

// Walk events //
function enemyAppear() {
    var sum = Math.floor(Math.random() * 2)
    if (sum === 0){
        return low
    } else if (sum === 1){
        return mid
    } else {
        return boss
    }
}

function findItem() {
    var sum = Math.floor(Math.random() * 3)
    if (sum === 0){
        readline.keyInPause("You found " + + "!")
        inventory.push("")
    } else if (sum === 1) {

    }
}

// Battle Menu //
function battleMenu(enemy) {
    // while enemy and hero are alive
    while (hP > 0 && enemy.health > 0){
        let input = readline.keyInSelect(["Flee", "Attack"])
        if(input === 0){
            tryToFlee(enemy)
        } else if (input === 1) {
            attack(enemy)
            readline.keyInPause(`${enemy.name} health: ${enemy.health}`)
            if(enemy.health <= 0){
                return walk()
            } else {
                enemyAttack(enemy)
                console.log(playerName+ ": "+hP)
            }
        } else {
            console.log("Invalid input")
        }
    }
}

// Walk Function //
function walk() {
    var sum = Math.floor(Math.random()* 3)
    if (sum === 0){
        console.log("You make your way through the dimly lit corridors")
    } else if (sum === 2){
        const enemy = enemyAppear()
        readline.keyInPause(enemy.name+" appears!")
        battleMenu(enemy)
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
        readline.keyIn("You find a blade broken nearly to the hilt. This should suffice as a weapon.. For now.")
        inventory.push("sword")
        
        let explore = true

        while (explore) {
            if (command === "w") { 
                walk()
                var command = readline.keyIn("*PRESS W TO WALK*")
            } else if (command === "p") {
                console.log("Player: "+playerName+", HP: "+hP+", Inventory: "+inventory.value)
                var command = readline.keyIn("*PRESS W TO WALK*")
            } else {
                console.log("Invalid input")
                var command = readline.keyIn("*PRESS W TO WALK*")
            }
        }
    }