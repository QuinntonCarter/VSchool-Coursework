const main = document.querySelector('main')
console.log(main) // Grabs just the first instance of the selector
const mainAll = document.querySelectorAll('main')
console.log(mainAll) // Grabs all instances of the selector
const title = document.querySelector('#title')
// Inner HTML -- DANGEROUS, AVOID USING
// main.innerHTML = `
//     <ul class='todo-list'>
//         <li>item 1</li>
//         <li>item 2</li>
//         <li>item 3</li>
//     </ul>
// `

// Create Elements
let ul = document.createElement('ul')
let li = document.createElement('li')
let span = document.createElement('span')

// Add Content to Elements
li.textContent = 'Item 1'
span.textContent = ' with Marcus'

// Insert New Elements to DOM
ul.className = 'todo-list'
ul.appendChild(li)
main.appendChild(ul)

// Insert Element into existing Element
span.style.color = 'blue'
title.appendChild(span)

// Use a loop to add multiple items
const button = document.querySelector('#add')

button.addEventListener('click', function(){
    const arr = ['Item 2', 'Item 3', 'Item 4']
    for(let i = 0; i < arr.length; i++){
        let li = document.createElement('li')
        li.textContent = arr[i]
        ul.appendChild(li)
        main.appendChild(ul)
    }
})
