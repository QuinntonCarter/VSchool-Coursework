// // Disable the widescreen breakpoint
// $widescreen-enabled: false

// // Disable the fullhd breakpoint
// $fullhd-enabled: false

const form = document["extermination-form"]
const goombaClick = document.getElementsByClassName("goombamug")
const cheepcheepClick = document.getElementsByClassName("Cheepcheep")
const bobombClick = document.getElementsByClassName("Bobomb")

// add click funct that checks box if image is clicked
// cheepcheepClick.addEventListener("click", function(){
//     e.
// })

// // add click funct that checks box if image is clicked
// bobombClick.addEventListener("click", function(){
//     e.
// })
// need to figure out how to multiply values and return them to form to be added together
function add(x,y,z){
    addsum = x+y+z

}

function mult(x,y){
    multsum = x * y

}


form.addEventListener("submit", function(e){
    e.preventDefault()

    // variable for value of goomba checkbox (need to parse to int)
    const goomba = form.goombacheck.value
    // // turn goomba base val into int
    const goombasBaseVal = parseInt(goomba)

    // // variable for value of cheeps checkbox (need to parse to int)
    const cheeps = form.cheepcheck.value
    // // turn cheep base val to integer
    const cheepsBaseVal = parseInt(cheeps)
    
    // // variable for value of bobombs checkbox (need to parse to int)
    const bobombs = form.bobombcheck.value
    // // turn bobomb base val into int
    const bobombBaseVal = parseInt(bobombs)
    // // ---  
    // // variable for customers input value of goombas
    const custGoombas = form.customergoombas.value
    const goombaCustInt = parseInt(custGoombas)

    // // variable for customers input value of cheepcheeps (need to parse to int)
    const custCheeps = form.customercheeps.value
    const cheepsCustInt = parseInt(custCheeps)

    // // // variable for customers input value of bobombs (need to parse to int)
    const custBobombs = form.customerbobombs.value
    const custBobombsInt = parseInt(custBobombs)
    // // ---  
    // // const totalReturn = document["totalreturn"]
    const totalGoombas = mult(goombasBaseVal,goombaCustInt)
    const totalCheeps = mult(cheepsBaseVal,cheepsCustInt)
    const totalBobombs = mult(bobombBaseVal,custBobombsInt)
    
    const total = add(totalGoombas,totalCheeps,totalBobombs)
    alert(total)

})

// console.log debugging area //





