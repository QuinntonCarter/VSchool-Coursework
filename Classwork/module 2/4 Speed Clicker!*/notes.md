const callback = function() {
    clicker.clicks.value = clickerCount++;
    localStorage.setItem("clickCount", clicker.clicks.value)
}
const event = document.addEventListener("click", callback)
var timer = document.getElementById("timer")
var time = 3
function getTimer() {
    timer.textContent = time--
    if (time === 0) {
        stopTimer()
        document.removeEventListener("click", callback)
    }
}