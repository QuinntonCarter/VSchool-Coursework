var form = document["todoform"];
var listOl = document.getElementById('todolist')

function showData(dta){
        // creates elements for styling
    let li = document.createElement('li')
    li.textContent = dta.data[i].title
    listOl.append(li)

    let checkBox = document.createElement('input')
    checkBox.type = "checkbox"

    li.prepend(checkBox)

    checkBox.addEventListener("change", function(){
        if (this.checked){
            li.style = "text-decoration: line-through"
        } else {
            li.style = "text-decoration: none"
        }
    })

    // creates delete button and appends to li
    let deleteButton = document.createElement('button')
    deleteButton.textContent = "Erase"
    deleteButton.style = "margin: 5px"

    li.appendChild(deleteButton)

    deleteButton.addEventListener("click", function(e){
        //selects listOl and orders removeChild event to target parentElement
        listOl.removeChild(e.target.parentElement)
    })
    }


    // adds list from api
axios.get("https://api.vschool.io/quinntoncarter/todo/")
    .then(function(response) {
        for (i=0; i < response.data.length;i++){
            showData(response)
        }
})
.catch(function(err){
    alert(err+"\n Try reloading the page.")
});





// adds event listeners to form and appends list to 
form.addEventListener("submit", function(e){
    var li = document.createElement('li')
    var checkBox = document.createElement('input')
    var deleteButton = document.createElement('button')
        deleteButton.textContent = 'Erase'
    var todoItem = {
        title: form.todoval.value
    }


    // sets form input val back to nothing after functions complete
    form.todoval.value = ""

    var todoItem = {
        title: form.todoval.value
    }


    axios.post("https://api.vschool.io/quinntoncarter/todo", todoItem)
        .then(function(response){
            showData(response)
        })
            .catch(error => alert(error))

    e.preventDefault(e)

})



// creates clear list button and adds event listener which sets the HTML creating the Ol to "" (clears)
const clearForm = document.createElement('button')
clearForm.textContent = "Clear List"
document.body.appendChild(clearForm)
clearForm.addEventListener('click', function(){
listOl.innerHTML = ""
})
