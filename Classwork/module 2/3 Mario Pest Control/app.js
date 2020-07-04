const form = document["extermination-form"]
const h1 = document.createElement("h1")


function add(x,y,z){
    addsum = x+y+z
    return addsum    
}

function mult(x,y){
    multsum = x * y
    return multsum
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
   //returning undefined. not possible to pull value from a function? 
    const total = add(totalGoombas,totalCheeps,totalBobombs)
    
    h1.textContent = total
    form.append("Your total before tax: $"+h1.textContent)

})

// console.log debugging area //





