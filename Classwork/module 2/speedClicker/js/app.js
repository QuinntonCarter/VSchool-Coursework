const counter = document["counthere"];
const lap = document["zoom"];
const startBtn = document.getElementById("start");
const newdiv = document.createElement("div");
const timerDisplay = document.createElement("div");


document.getElementById("image").src = 'https://i.pinimg.com/originals/4e/89/85/4e89851d2c5548a8542a5ee11068552e.gif'
timerDisplay.style.fontSize="54px";
timerDisplay.style.color = "white";

startBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let count= 0
    let goTime = 30
    let readyID = setInterval(decrementGo, 1000)


    function decrementGo(){
        timerDisplay.textContent = 'Get Ready!!'
        // prepends timerDisplay on BODY //
        document.body.prepend(timerDisplay)
        setTimeout(() => {
            // decrements timer over 30 seconds //
            let timed = goTime--
            // sets the display to the decrementing time //
            timerDisplay.textContent = timed
            // prepends timerDisplay on BODY //
            document.body.prepend(timerDisplay)
            let status = new Promise((res, rej)=> {
                if(timed == 0){
                    clearInterval(readyID)
                }
            })
            return status
        }, 3000)
    };

    function onClick(){
        if(timer === 0 || getSet !== 0){
            lap.removeEventListener("click", onClick)
        } else {
            let counted = count++
            newdiv.textContent = counted
            counter.append(newdiv)
            if(newdiv.textContent%100===0 && !1){
                console.log('wow!')
            } if(newdiv.textContent%50===0 && !1){
                console.log('pretty fast..!')
            }
        }
    };

    decrementGo();
    e.target.disabled = true
    lap.addEventListener("click", onClick);
});