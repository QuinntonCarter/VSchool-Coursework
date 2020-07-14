const counter = document["counthere"]
const newdiv = document.createElement("div")
const timerDisplay = document.createElement("div")
let startButton = document["start"]

timerDisplay.style.fontSize="54px"

var count= 0
let timer = 30


document.body.addEventListener("click", function(e){
    e.preventDefault()
    // increments var count by one and returns result //
    let counted = count++
    // assigns count var to new div element //
    newdiv.textContent = counted
    // appends new div w/ count value to 'counthere' div //
    counter.append(newdiv)

})

function decrementTime(){
        // decrements timer over 30 seconds //
        let timed = timer--
        // sets the display to the decrementing time //
        timerDisplay.textContent = timed
        // prepends timerDisplay on BODY //
        document.body.prepend(timerDisplay)
}

function stopTimer(){
    clearInterval(timerID),
    alert("Great job! Reload the page to restart!");
}

var timerID = setInterval(decrementTime, 1000);

setTimeout(stopTimer, 31000)