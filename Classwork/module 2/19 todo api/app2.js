var form = document["todoform"];
var listOl = document.getElementById('todolist')
/// ----- --------

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
// creates .id for manipulation later in code
    li.id = obj.data[i]._id
    let title = obj.data[i].title
    let time = obj.data[i].description
    let file = obj.data[i].imgURL
    let item = title+", \nTime: "+time+", \n"+file
    li.innerHTML = item
// erase button, clear button, and checkbox
    const eraseBut = document.createElement('button')
    eraseBut.textContent = 'Erase'
    eraseBut.style = "margin: 15px"

/// eventlisteners for erase, 
eraseBut.addEventListener('click', function(e){
    //selects listOl and orders removeChild event to target parentElement
    var item = e.target.parentElement
    listOl.removeChild(item)
    removeAPI(item.id)
})

    const checkBox = document.createElement('input')
    checkBox.type = "checkbox"




/// and checkbox buttons
    checkBox.addEventListener("change", function(){
        if (this.checked){
            li.style = "text-decoration: line-through"
        } else {
            li.style = "text-decoration: none"
        }
    })

// li append and prepends here
li.prepend(checkBox)
li.appendChild(eraseBut)
listOl.append(li)
}}

function postAPIDatabase(ap,item){
    /// adds submitted data to API database w axios post
        axios.post("https://api.vschool.io/quinntoncarter/todo/", ap)
        .then(response => item.id = response.data._id)
        .catch(error => alert(error))
    }
    

/// ----- --------
/// function for API deletion
function removeAPI(api){
    axios.delete(`https://api.vschool.io/quinntoncarter/todo/${api}`)
        .then(response => console.log(response))
        .catch(error => alert(error))
    }
// ------ -------
const clearFormBut = document.createElement('button')
clearFormBut.textContent = "Clear List"
document.body.appendChild(clearFormBut)
clearFormBut.addEventListener('click', function(){
    listOl.innerHTML = ""
})
// ------ -------


form.addEventListener('submit', function(e){
    e.preventDefault(e)
/// variables for form values
    let li = document.createElement('li')
    const todoTitle = form.title.value
    const todoTime = form.time.value
    // const todoFile = form.file.value
    const todoItem = todoTitle+", \nTime: "+todoTime
    li.innerHTML = todoItem
    var todoObject = {
        title: form.title.value,
        description: form.time.value,
        // imgURL: form.file
    }

// erase button, clear button, and checkbox
    const eraseBut = document.createElement('button')
    eraseBut.textContent = 'Erase'
    eraseBut.style = "margin: 15px"

    eraseBut.addEventListener('click', function(e){
        //selects listOl and orders removeChild event to target parentElement
        var item = e.target.parentElement
        listOl.removeChild(item)
        removeAPI(item.id)
    })

    const checkBox = document.createElement('input')
    checkBox.type = "checkbox"

// and checkbox buttons
    checkBox.addEventListener("change", function(){
        if (this.checked){
            li.style = "text-decoration: line-through"
        } else {
            li.style = "text-decoration: none"
        }
    })
    

// appends item
    li.appendChild(eraseBut)
    li.prepend(checkBox)
    listOl.appendChild(li)
// function which adds todoObject to API database
    postAPIDatabase(todoObject,li)

    form.title.value = ""
    form.time.value = ""
    form.files = 0
})

