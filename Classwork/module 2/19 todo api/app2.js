var form = document["todoform"];
var listOl = document.getElementById('todolist')
// ------ -------
const clearFormBut = document.createElement('button')
clearFormBut.textContent = "Clear List"
document.body.appendChild(clearFormBut)
clearFormBut.addEventListener('click', function(){
    listOl.innerHTML = ""
})

// ------ -------

// GET full list from api
axios.get("https://api.vschool.io/quinntoncarter/todo/")
.then(function(response) {
    // for (i=0; i < response.data.length;i++){
        addAPIObjects(response)
    // }
})
.catch(function(err){
    alert(err+"\n Try reloading the page.")
});

// ------ -------

function addAPIObjects(obj){
    for (i=0; i < obj.data.length;i++){
    let li = document.createElement('li')
    li.innerHTML = obj.data[i].title
// erase button, clear button, and checkbox
    const eraseBut = document.createElement('button')
    eraseBut.textContent = 'Erase'
    eraseBut.style = "margin: 15px"
    li.appendChild(eraseBut)

    const checkBox = document.createElement('input')
    checkBox.type = "checkbox"
    li.prepend(checkBox)

    listOl.append(li)


////////// ignore /////////
// // eventlisteners for erase, 
//     eraseBut.addEventListener('click', function(e){
// //selects listOl and orders removeChild event to target parentElement
//     listOl.removeChild(e.target.parentElement)
// // create and add funciton for deletion here, removes from database
// // removeAPI(todoObject[i].id)
//     })
////////// ignore /////////

/// create get function that gets individual API and returns then calls 
/// removeAPI func w said response as arg

/// function for API deletion
function removeAPI(api){
    delete(`https://api.vschool.io/quinntoncarter/todo/${api}`)
        .then(response => console.log(response.data))
        .catch(error => alert(error))
    }
/// **** how do to select individual apis and remove from database? ****
/// eventlisteners for erase, 
    eraseBut.addEventListener('click', function(e){
        //selects listOl and orders removeChild event to target parentElement
        var item = e.target.parentElement
        listOl.removeChild(item)
        removeAPI(item.id)
    })

/// and checkbox buttons
    checkBox.addEventListener("change", function(){
        if (this.checked){
            li.style = "text-decoration: line-through"
        } else {
            li.style = "text-decoration: none"
        }
    })



}}

/// ----- --------

function postAPIDatabase(ap){
/// adds submitted data to API database w axios put? or post?
    axios.post("https://api.vschool.io/quinntoncarter/todo/", ap)
    .then(response => console.log(response.data))
    .catch(error => alert(error))
}

/// ------ -------

form.addEventListener('submit', function(e){
    e.preventDefault(e)
/// variables for form values
    const todoTitle = form.title.value
    const todoTime = form.time.value
    const todoFile = form.file.value
    const todoItem = todoTitle+", \nTime: "+todoTime+", \n"+todoFile
    let li = document.createElement('li')
    li.textContent = todoItem
    var todoObject = {
        title: form.title.value,
        description: form.time.value,
        // imgURL: form.file
    }

// erase button, clear button, and checkbox
    const eraseBut = document.createElement('button')
    eraseBut.textContent = 'Erase'
    eraseBut.style = "margin: 15px"
    li.appendChild(eraseBut)

    const checkBox = document.createElement('input')
    checkBox.type = "checkbox"
    li.prepend(checkBox)

    listOl.appendChild(li)

    form.title.value = ""
    form.time.value = ""
    form.files = 0

// and checkbox buttons
    checkBox.addEventListener("change", function(){
        if (this.checked){
            li.style = "text-decoration: line-through"
        } else {
            li.style = "text-decoration: none"
        }
    })
    
// function which adds todoObject to API database
    postAPIDatabase(todoObject)
})

