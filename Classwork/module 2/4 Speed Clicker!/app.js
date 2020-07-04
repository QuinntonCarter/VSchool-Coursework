const counted = document["counthere"]
const newdiv = document.createElement("div")
var count= 0


document.body.addEventListener("click", function(e){
    e.preventDefault(e)
    // increments var count by one and returns result //
    ++count
    // assigns count var to new div element //
    newdiv.textContent = count
    // appends new div w/ count value to 'counthere' div //
    counted.append(newdiv)
})