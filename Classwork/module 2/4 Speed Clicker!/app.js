// sessionStorage.setItem("savedCount")
const counter = document["counthere"]
const newdiv = document.createElement("div")
var savedCount = []
var count= 0


document.body.addEventListener("click", function(e){
    e.preventDefault(e)
    // increments var count by one and returns result //
    let counted = ++count
    // assigns count var to new div element //
    newdiv.textContent = counted
    savedCount.push(counted)
    // appends new div w/ count value to 'counthere' div //
    counter.append(newdiv)
})