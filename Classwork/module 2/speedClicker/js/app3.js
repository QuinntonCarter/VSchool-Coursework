const counter = document["counthere"];
const lap = document["zoom"];
const startBtn = document.getElementById("start");
const newdiv = document.createElement("div");
const timerDisplay = document.createElement("div");

timerDisplay.style.fontSize="54px";
document.getElementById("image").src = 'https://i.pinimg.com/originals/4e/89/85/4e89851d2c5548a8542a5ee11068552e.gif'


startBtn.addEventListener("click", (e) => {
    let count= 0;
    let getSet = 3
    let timer = 30;

    var timerID = setInterval(decrementTime, 1000);

    function onClick(){
        if(timer === 0){
            lap.removeEventListener("click", onClick)
        } else {
            let counted = count++
            newdiv.textContent = counted
            counter.append(newdiv)
            if(newdiv.textContent%100===0 && !1){
                console.log('wow!')
            }if(newdiv.textContent%50===0 && !1){
                console.log('pretty fast..!')
            }
        }
    };

    function decrementTime(){
        // if(countDown !== 0){
            // decrements timer over 30 seconds //
            let timed = timer--
            // sets the display to the decrementing time //
            timerDisplay.textContent = timed
            // prepends timerDisplay on BODY //
            document.body.prepend(timerDisplay)
    };

    // function getReady(){
    //     let countDown = getSet--
    //     let readyID = setInterval(countDown, 1000)
    //     timerDisplay.textContent = countDown
    // };

    function stopTimer(){
        clearInterval(timerID)
        timer = 0
        startBtn.textContent = 'Retry'
        startBtn.disabled = false
    };

    function go(){
        setTimeout(stopTimer, 31000);
            // decrements timer over 30 seconds //
            let timed = timer--
            // sets the display to the decrementing time //
            timerDisplay.textContent = timed
            // prepends timerDisplay on BODY //
            document.body.prepend(timerDisplay)
    };

    lap.addEventListener("click", onClick);
    e.target.disabled = true
});

{
function onClick(){
    if(timer <= 0){
        document.body.removeEventListener("click", onClick)
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
}
