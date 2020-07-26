let status = ["Powered Up", "Big", "Small", "Dead"];
let gameActive = true

const randomize = function(){
    sum = Math.floor(Math.random() * 3)
    if (sum === 0){
        gotHit()
    } if (sum === 1){
        gotPowerup()
    } if (sum === 2){
        addCoin()
    } else if (gameActive === false) {
        return "Game Over"
    }
}




class Player {
    constructor(name, totalCoins, status, hasStar){
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }

    setName(namePicked){
        sum = Math.floor(Math.random() * 3)
        if (sum === 0){
            namePicked = "Mario"
        } else {
            namePicked = "Luigi"
        }
    }

    gotHit(){

    }

    gotPowerUp(){

    }

    addCoin(){
        totalCoins+=
    }

    gameActive(status = true){
        if (status = false){
            break
        }
    }

}

while (gameActive){
    setInterval (function(){
        if(gameActive = true){
        randomize()
    }}, 4500);
    }


// gotHit(){
//     status === "dead"
// }

// gotPowerUp(){
//     console.log("powerup")
// }

// addCoin(){
//     console.log("working coin")
// }

// print(){
//     return "Player: "+name+"\n Coins: "+totalCoins+"\n Status: "+status+"\nStar: "+hasStar
// }
// status(){
//     const sum = Math.floor(Math.random() * 3)
//     if(sum === 0){
//         gotHit()
//         print()
//     } if(sum === 1){
//         gotPowerUp()
//         print()
//     } else {
//         addCoin()
//         print()
//     } if (status === "dead") {
//         console.log("game over")
//         game = false
//         break
//     }
// }