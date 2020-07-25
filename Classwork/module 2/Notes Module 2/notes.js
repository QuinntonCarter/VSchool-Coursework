// let and const
// Replace all the vars with let and const. 
// Alter the code however necessary to make sure this 
// continues to work (so the pet's name isn't "John", 
// but instead "spot" is returned). You only need to 
// delete var and insert let and const

// John is the pet owner, and his name should be 
// stored differently than the other names.

const name = "John"
var age = 101

function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            let name = "fluffy"
        } else {
            let name = "spot"
        }
        console.log("pet name: ", name)
        var petname = name
        petObjects.push(petname)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])
