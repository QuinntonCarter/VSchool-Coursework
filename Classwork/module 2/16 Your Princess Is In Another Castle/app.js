class Player {
    constructor(name, totalCoins, status, hasStar) {
        this.name = name
        this.totalCoins = totalCoins
        this.status = status
        this.hasStar = hasStar
    }

    print(){
        return "Name: "+this.name+"\n Coins: "+this.totalCoins+"\n Status: "+this.status+"\n Star: "+this.hasStar
    }

    gotHit(){
        if (this.status === 'big'){
            this.status = 'small'
        } if (this.status === 'powered up'){
            this.status = 'big'
        }  else if (this.status === 'small'){
            console.log("Game Over")
        }
    }

    gotPowerUp(){
        if (this.status === 'small'){
            this.status = 'big'
        } if (this.status === 'big'){
            this.status = 'powered up'
        } else if (this.status === 'powered up') {
            this.hasStar = true
        }
    }

    addCoin(){
        this.totalCoins+=1
    }
}


let mario = new Player('Mario', 0, 'small', false)
let luigi = new Player('Luigi', 0, 'small', false )

function randomNum(){
    sum = Math.floor(Math.random() * 3)
    if (sum === 0){
        mario.gotHit()
    } if (sum === 1){
        mario.gotPowerUp()
    } else if (sum === 2){
        mario.addCoin()
    }
    mario.print()
}

setInterval(randomNum, 1000)