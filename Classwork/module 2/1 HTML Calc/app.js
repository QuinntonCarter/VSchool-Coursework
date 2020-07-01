const multForm = document["mult"]
const addForm = document["add"]
const subForm = document["sub"]
const h1 = document.createElement("h1")

function mult(x,y){
    // converts input values to integers + declares as variables
    let first = parseInt(x)
    let second = parseInt(y)
    // declares sum var and performs mult operation
    sum = first * second
    //assigns sum as h1 text content
    h1.textContent = sum
    // appends h1 text content(sum) to mult form and overwrites previous data
    multForm.append(h1)
}

function add(x,y) {
    // see above
    let first = parseInt(x)
    let sec = parseInt(y)

    sum = first + sec
    h1.textContent = sum
    addForm.append(h1)
}

function sub(x,y) {
    // see above
    let firstNum = parseInt(x)
    let secondNum = parseInt(y)
    sum = firstNum - secondNum
    h1.textContent = sum
    subForm.append(h1)
}

multForm.addEventListener("submit", function(e){
    // prevents page reload
    e.preventDefault()
    // creates variables for values gathered in form
    const firstM = multForm.firstMult.value
    const secM = multForm.secondMult.value
    // calls function to preform assigned operation
    mult(firstM,secM)
})

addForm.addEventListener("submit", function(e){
    e.preventDefault()
    const firstNumString = addForm.firstAdd.value
    const secondNumString = addForm.secondAdd.value

    add(firstNumString,secondNumString)
})

subForm.addEventListener("submit", function(e){
    e.preventDefault()
    const firstS = subForm.firstSub.value
    const secS = subForm.secondSub.value

    sub(firstS,secS)
})