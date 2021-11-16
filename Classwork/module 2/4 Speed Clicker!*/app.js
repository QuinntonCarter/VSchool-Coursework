const counter = document["counthere"];
const newdiv = document.createElement("div");
const timerDisplay = document.createElement("div");
let startButton = document["start"];

timerDisplay.style.fontSize="54px";

var count= 0
let timer = 30

document.body.addEventListener("click", onClick)

function onClick(){
    if(timer <= 0){
        document.body.removeEventListener("click", onClick)
        console.log(timer)
    } else {
        let counted = count++
        newdiv.textContent = counted
        counter.append(newdiv)
    }
};

function decrementTime(){
        // decrements timer over 30 seconds //
        let timed = timer--
        // sets the display to the decrementing time //
        timerDisplay.textContent = timed
        // prepends timerDisplay on BODY //
        document.body.prepend(timerDisplay)
};

function stopTimer(){
    clearInterval(timerID)
};

var timerID = setInterval(decrementTime, 1000);

setTimeout(stopTimer, 31000);