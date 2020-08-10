const todoList = document.getElementById("todolist")
const submitButton = document["submit"]
const input = document["todoval"]
const form = document["todoform"]

function makeList(){
    submitButton.addEventListener("submit", function(e){
        e.preventDefault()

        const h1 = document.createElement('h1')
        h1.textContent = input.value
        form.appendChild(h1)
    })
