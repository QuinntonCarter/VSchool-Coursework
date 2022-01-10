const counter = document.getElementById("clickCount");
const lap = document["zoom"];
const startBtn = document.getElementById("start");
const previousScore = document.getElementById("previous");
const timerDisplay = document.createElement("div");
const countDisp = document.createElement('h2');

document.getElementById("image").src='https://i.pinimg.com/originals/4e/89/85/4e89851d2c5548a8542a5ee11068552e.gif'
timerDisplay.style.fontSize="54px";
timerDisplay.style.color = "white";

previousScore.textContent = localStorage.getItem('oldCount')
previousScore.style.fontSize='44px'
previousScore.style.color='red'

startBtn.addEventListener("click", (e) => {
    e.preventDefault()
    let count = 0
    countDisp.textContent = count
    countDisp.style.color = 'white'
    let goTime = 33
    let readyID = setInterval(decrementGo, 1000)

    document.getElementById("image").src='https://c.tenor.com/h9v3AZTRckYAAAAC/speed-racer.gif'
    
    function onClick(){
        if(goTime === 0){
            document.removeEventListener("click", onClick);
        } else {
            count++
            counter.append(countDisp)
            if(countDisp.textContent%100===0 && !1){
                console.log('wow!')
            } if(countDisp.textContent%50===0 && !1){
                console.log('pretty fast..!')
            }
        }
    };

    function decrementGo(){

        document.body.prepend(timerDisplay)

        setTimeout(() => {
            // decrements timer over 30 seconds //
            let timed = goTime--
            // sets the display to the decrementing time //
            timerDisplay.textContent = timed
            let score = document.createElement('h2')
            score.textContent= count
            score.style.color='white'
            score.style.fontSize='64px'
            timerDisplay.append(score)
            if(timed <= 0){
                clearInterval(readyID)
                document.getElementById("image").src='https://c.tenor.com/h9v3AZTRckYAAAAC/speed-racer.gif'
                timerDisplay.textContent = "FINISH"
                localStorage.setItem('oldCount', count)
            } if(timed > 0 && timed < 30){
                localStorage.setItem('count', count)
            }if(timed === 30){
                timerDisplay.textContent = "GO!!"
                document.addEventListener("click", onClick);
            } if(timed > 30){
                timerDisplay.textContent = "GET READY!"
            }
        })
    };

    decrementGo();
    e.target.disabled = true
});