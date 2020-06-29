var readline = require("readline-sync");
var optionsYesNo = ["Yes", "No"];
var noOptions = ["Fine", "..."]
// const inventory = [];
// var battleOptions = ["Flee", "Intimidation", "Attack", "Felicia Attack"]

for(let i = 0; i < healthSum; i++){
    var healthSum = 30
    if (inventory.mushrooms.length >= 5){
        let healthSum = 60
    } else {
        healthSum = 30
    }}

// Constructors //
function enemy (type, health, attack, courage, voiceSound) {
    this.type = type
    this.health = health
    this.attack = attack
    this.courage = courage
    this.voiceSound = voiceSound
    }

// weapon description *call when weapon is found **don't need..? //
// weapon.prototype.description = function() {
//     console.log(this.descWeapon)
// }

function weapon (typeOf, damage, intimidation, defense, descWeapon) {
    this.typeOf = typeOf
    this.damage = damage
    this.intimidation = intimidation
    this.defense = defense
    this.descWeapon = descWeapon
}

// enemy types // 
    var skeleton = new enemy ("Skeleton", 7, 5, 2, "*bones clanking*")
    var goblin = new enemy ("Goblin", 20, 10, 20, "Felicia? Is that you?")
    var rat = new enemy ("Rat", 4, 2, 13, "*squeak* Gramblgort *squeak* You're not a human!! *squeak squeak*")
    var zombie = new enemy ("Zombie", 8, 9, 100, "Aaauuuhggg.." ) 
    var foragerHippie = new enemy ("Forager",50,100,100,"Hey man, I'm gathering mushrooms and herbs. Have you--Yooo, my duuude! Is that a Goblin?!")

// weapon types // 
    var bow = new weapon("Elfo's Bow", 4, 0, 2,"A small bow... You nearly mistook it for a novelty toy.")
    var glassBottle = new weapon("Broken Beer Bottle", 6, 20, 4, "'The Champagne of Beers'")
    var staff = new weapon("Mighty Wizard's Staff", 10, 20, 7,"Felicia: Whoa, that staff belongs to... Nevermind. Can you even use magick? I suppose you could use it as a blunt object. Just take care of the priceless gem embedded in the end.")
    var sandal = new weapon("Ancient Swamp Artifact", 50, 12, 30,"A size 12 men's sandal embued with the mythical and deadly poison, swamp foot stench.")

// enemy vocalization function *call when walking and battle start **don't need..? //
    // enemy.prototype.voiceSound = function() {
    //     console.log(this.voiceSound)
    // }


// Battle Menu //
function battleMenu() {
    let HP = 30
    for (var i = 0; i < HP; i++ ){
    // while(HP > 0){
    let input = readline.keyInSelect(["Flee", "Intimidation", "Attack", "Felicia Attack"])
    if (input === 0){
        console.log(flee())
    } else if (input === 1){
        console.log(warFace())
    } else if (input === 2){
        console.log(attack())
    } else if (input === 3){
        console.log(feliciaMagic())
    } else {
        return "Felicia: Are you alright?! Don't freeze up now!"
        readline.keyInSelect(["Flee", "Intimidation", "Attack", "Felicia Attack"])
    }
break
}
}


// Battle Variables/functions [flee(), warFace(), attack(), feliciaMagic()]; //
function flee() {
    var sum = Math.floor(Math.random()*2)
    Math.floor(Math.random()*2)
    if (sum > 0) {
    readline.keyInPause("The "+enemy.type+" blocks your escape!")
    console.log(battleMenu())
    } else {
        return "You and Felicia stumble over one another into the night!"
    }
}

function warFace() {
    var sum = Math.floor(Math.random()*2)
    Math.floor(Math.random()*2)
    if (sum > enemy.courage) {
        readline.keyInPause("The "+enemy.type+ ": Damn, you're ugly." +sum)
        readline.keyInPause("The "+enemy.type+ " is unfazed by your ugly face..")
    } else if (sum === enemy.courage){
        readline.keyInPause("The "+enemy.type+ " is frozen with fear!"+sum)
        battleMenu()
    } else {
        readline.keyInPause("The "+enemy.type+ " fled!")
        readline.keyInPause("Felicia: That's right, get outta here!"+sum)
        "return to exploration *placeholder"
    }
}

function attack(){
    var sum = Math.floor(Math.random())
    Math.floor(Math.random())
    if (sum === 0){
        return "reg hit"
    } else if (sum/2 === 2){
        return "crit"
    } else if (sum/3 === 6){
        return "reg hit" 
    } else if (sum/4 === 3){
        return "crit"
    } else if (sum/5 === 4){
        return "reg hit"
    } else if (sum == 8) {
        return "crit"
    } else if (sum == 12){
        return "reg hit"
    } else {
        return "reg hit"
    }
}


function feliciaMagic(){
    var sum = Math.floor(Math.random()*3)
    Math.floor(Math.random()*3)
    if (sum >= 4) {
        readline.keyInPause("HIYYAAAAAA!!")
        readline.keyInPause("CRITICAL HIT!" +sum)
        readline.keyInPause("return damage placeholder")
        battleMenu()
    } else if (sum <= 10){
        readline.keyInPause("HIYYAAAAAA!!")
        readline.keyInPause("return damage placeholder"+sum)
        battleMenu()
    } else {
        readline.keyInPause("HIYYAAAAAA!!")
        readline.keyInPause("Felicia missed!"+sum)
        battleMenu()
    }
}

// Gameplay functions //
function walk() {
    var sum = Math.floor(Math.random()*13)
    Math.floor(Math.random() * 13)
    if (sum === 0){
        return enemyComment()
    } else if (sum/2 === 2){
        return "find mushroom const placeholder"
    } else if (sum/5 === 4){
        return feliciaComment()
    } else if (sum === 5) {
        return "*Mud sucks your feet toward the Earth with each step...*"
    } else if (sum === 6) {
        return "find health object const"
    } else if (sum === 7){
        readline.keyIn("A silhouette appears amongst the trees!")
        readline.keyIn(battleCry())
        battleMenu()
    } else if (sum == 8) {
        readline.keyIn("A silhouette appears amongst the trees!")
        readline.keyIn(battleCry())
        battleMenu()
    } else if (sum == 12){
        return "*You stumble over a large, solid object hidden by the grass and darkness...*"
    } else {
        return "*Dark, swap grass softly crunches beneath your feet...*"
    }
}

// Comment functions //
function nameWrong() {
    var sum = Math.floor(Math.random() * 13) 
    Math.floor(Math.random() * 13)
    if (sum === 0){
        return "Pa"
    } else if (sum/2 === 2){
        return "Ho"
    } else if (sum/3 === 6){
        return "Fa" 
    } else if (sum/4 === 3){
        return "Ga"
    } else if (sum/5 === 4){
        return "Sch"
    } else if (sum === 5) {
        return "Na"
    } else if (sum === 6) {
        return "Phu"
    } else if (sum === 7){
        return "Gri"
    } else if (sum == 8) {
        return "La"
    } else if (sum == 12){
        return "Wa"
    } else {
        return "Ru"
    }
}

function feliciaComment() {
    var sum = Math.floor(Math.random() * 13) 
    Math.floor(Math.random() * 13)
    if (sum === 0){
        var favBand = readline.question("Who's your favorite band or musician?")
        readline.keyInPause("Hell yeah! I like their older stuff. My favorite band is GWAR!")
    } else if (sum/2 === 2){
        return "I know exactly where we are."
    } else if (sum/3 === 6){
        return "Too bad my data is up for the month. We could be listening to "+favBand
    } else if (sum/4 === 3){
        return "I have no idea where we are..."
    } else if (sum/5 === 4){
        return "comment 5"
    } else if (sum === 5) {
        return "Haven't we passed through here already?"
    } else if (sum === 6) {
        return "comment 7"
    } else if (sum === 7){
        return "comment 8"
    } else if (sum == 8) {
        return "comment 9"
    } else if (sum == 12){
        return "comment 10"
    } else {
        return "comment 11"
    }
}

function enemyComment() {
    var sum = Math.floor(Math.random() * 4) 
    Math.floor(Math.random() * 4)
    if (sum === 0){
        return "*Somewhere close in the night you hear*: *Bones clanking*"
    } else if (sum === 32){
        return "*Somewhere close in the night you hear whispers*: Is.. That Gramblgort?"
    } else if (sum === 1){
        return "*Somewhere close in the night you hear*: *The shrill howl of a wolf*"
    } else {
        return "*Somewhere close in the night, you hear frantic movement through the tall grass..*"
    }
}

function battleCry() {
    var sum = Math.floor(Math.random() * 4) 
    Math.floor(Math.random() * 4)
    if (sum === 0){
        return skeleton.voiceSound
    } else if (sum === 32){
        return goblin.voiceSound
    } else if (sum === 1){
        return rat.voiceSound
    } else if (sum/2 === 8) {
        return foragerHippie.voiceSound
    } else {
        return zombie.voiceSound
    }
}


let colossalRPG = true

readline.keyInPause ("Warm night air rustles dry grass around you...");
readline.keyInPause ("Opening your eyes you come face to face with a small, red goblin. Their face couldn't be any closer to your own.");
readline.keyInPause ("They croak: \n 'Do you want to play a game with me?'");

while (colossalRPG) {
    var reply = readline.keyInSelect(optionsYesNo, 'How will you reply?')
    if (reply === 0) {
        console.log("Finally! I thought I'd have to kill you like all the others! Not so fun after the first 100 or so.")
        introFelicia();
    } else if ( reply === 1) {
        readline.keyInPause("I bet you're fun at parties...")
        readline.keyInPause("C'mon.." )
        var askAgain = readline.keyInSelect(noOptions, "How will you reply?")
    } else if (reply === 2) {
        console.log("\n \n*THWACK!*\nGAME OVER.\nReload to replay or close window to exit.")
        break
    } if (askAgain === 1){
        console.log("\n \n*THWACK!*\nGAME OVER.\nReload to replay or close window to exit.")
        break
    } else if (askAgain === 0) {
        console.log("I REALLY thought I'd have to kill you like all the others! Not so fun after the first 100 or so.")
        introFelicia();
    } break
    
    function introFelicia() {
    let playerName = readline.question("What is your name?");
    readline.keyInPause("-ACTUALLY, I don't care but my name is Felicia.")
    readline.keyInPause("I've always wanted to be a human. I picked out my own name. I wanted something that sounded more.. Human.")
    readline.keyInPause("The other humans laughed at me when I told them that so I had to kill them. You're kind of quiet but you didn't laugh at me. Maybe we can be friends.")
    readline.keyInPause("Come on, "+nameWrong()+playerName.toLowerCase()+ " let's walk. The poison certainly should've worn off enough for your pathetic body to do at least that.")
    var command = readline.keyIn("*PRESS W TO WALK*")
    let explore = true

    while (explore){
        if (command === "w") { 
            console.log (walk())
            var command = readline.keyIn("*PRESS W TO WALK*")
        } else if (command !== "w") {
            console.log("Where are you going "+nameWrong()+playerName.toLowerCase()+"? This way..")
            var command = readline.keyIn("*PRESS W TO WALK*")
        }
    }
    }
}
