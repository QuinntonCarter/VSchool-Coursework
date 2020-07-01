const multForm = document["mult"]
const addForm = document["add"]
const subForm = document["sub"]

function add(x,y) {
    sum = x+y 
    addForm.append(" "+sum+" ")
}

function sub(x,y) {
    sum = x-y
    subForm.append(" "+sum+" ")
}

multForm.addEventListener("submit", function(e){
    e.preventDefault()
    const firstM = multForm.firstMult.value
    const secM = multForm.secondMult.value
    sum = firstM*secM
    multForm.append(" "+sum+" ")
    
})

addForm.addEventListener("submit", function(e){
    e.preventDefault()
    const firstA = addForm.firstAdd.value
    const secA = addForm.secondAdd.value
    add(firstA,secA)
})

subForm.addEventListener("submit", function(e){
    e.preventDefault()
    const firstS = subForm.firstSub.value
    const secS = subForm.firstSub.value
    sub(firstS,secS)
})
