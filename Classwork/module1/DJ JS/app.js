// Creates selectable js element for 
// div.square in html.index document
var square = document.getElementById('square');

// adds event listener on click that changes square to red
square.addEventListener('click', function(){
// calls styling to square
this.style.backgroundColor = 'red'
})

// adds event listener on mouseover that changes square to blue
square.addEventListener('mouseover', function(){
//calls styling to square
this.style.backgroundColor = 'blue'
})

// adds event listener on dblclick that changes square to green
square.addEventListener('dblclick', function(){
//calls styling to square
this.style.backgroundColor = 'green'
})

// adds event listener (to entire document) on mouse
// scroll that changes square to orange
document.addEventListener('wheel',function(){
//calls styling to square
square.style.backgroundColor = 'darkorange'
})

// adds event listener on down click that changes square to yellow
square.addEventListener('mousedown', function(){
// calls styling to square
this.style.backgroundColor = 'yellow'
})

// adds event listener on R keydown that colors square to red
addEventListener('keydown',function(x){
    // calls styling to square
    if(x.keyCode == 82)
    square.style.backgroundColor = 'red'
})

// adds event listener on B keydown that colors square to blue
addEventListener('keydown',function(x){
    // calls styling to square
    if(x.key == 'b')
    square.style.backgroundColor = 'blue'
})

// adds event listener on G keydown coloring the square green
addEventListener('keydown',function(x){
    // calls styling to square
    if(x.keyCode == 71)
    square.style.backgroundColor = 'green'
})

// adds event listener on O keydown coloring the square darkorange
addEventListener('keydown',function(x){
    // calls styling to square
    if(x.keyCode == 79)
    square.style.backgroundColor = 'darkorange'
})

// adds event listener on Y keydown coloring the square yellow
addEventListener('keydown',function(x){
    // calls styling to square
    if(x.keyCode == 89)
    square.style.backgroundColor = 'yellow'
})