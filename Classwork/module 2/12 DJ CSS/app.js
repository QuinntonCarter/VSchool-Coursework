let squareJS = document.getElementById('square')

squareJS.addEventListener('mouseover', function(){
    this.style.backgroundColor = 'blue'
})

squareJS.addEventListener('dblclick', function(){
    this.style.backgroundColor = 'forestgreen'
})

squareJS.addEventListener('mouseup', function(){
    this.style.backgroundColor = 'gold'
})

squareJS.addEventListener('mousedown', function(){
    this.style.backgroundColor = 'red'
})

document.addEventListener('wheel', function(){
    squareJS.style.backgroundColor = 'darkorange'
})


document.addEventListener('keydown', function(e){
    if(e.keyCode === 82){
    squareJS.style.backgroundColor = 'red'
    }
})

document.addEventListener('keydown', function(e){
    if(e.keyCode === 71){
    squareJS.style.backgroundColor = 'forestgreen'
    }
})

document.addEventListener('keydown', function(e){
    if(e.keyCode === 89){
    squareJS.style.backgroundColor = 'gold'
    }
})

document.addEventListener('keydown', function(e){
    if(e.keyCode === 66){
    squareJS.style.backgroundColor = 'blue'
    }
})

document.addEventListener('keydown', function(e){
    if(e.keyCode === 79){
    squareJS.style.backgroundColor = 'darkorange'
    }
})