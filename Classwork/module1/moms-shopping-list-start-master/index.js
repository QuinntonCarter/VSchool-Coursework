const form = document["grocery-form"]
var hook = document.getElementById('hook')
// edit button
var edit = document.createElement("button")


form.addEventListener("submit", function(e) {
    // Prevents reload of page, loss of data
    e.preventDefault()
    // const item value var
    var item = form.itemName.value
    // sets the value of input back to nothing upon submission
    form.itemName.value =""
    // const variable of new li element 
    const listItem = document.createElement("li")
    // sets listItem variable's value to that gathered
    // from form
    listItem.textContent = item
    listItem.setAttribute("class","list-item")
    // appends list item li tag
    document.getElementsByTagName("li")[0].append(listItem)
    ////////         ////////         ////////         ////////         
    // erase Button  /////
    const erase = document.createElement("button")
    //delete event listener
    erase.addEventListener("click", function(e) {
        // targets parent element and sets value to nothing
        e.target.parentElement.textContent = " "
    })
    // Styles erase button
    erase.setAttribute("class", "erase-style")
    erase.textContent="x"
////////         ////////         ////////         ////////         
        // Style edit button
        edit.setAttribute("class","edit-style")
        edit.textContent="Edit Item"
        //prepends li to list
        listItem.prepend(erase)
        listItem.prepend(edit)
    // event listener+function
    edit.addEventListener('click', function(e) {
        const newEdit = createNewEdit()
        e.target.setAttribute('class', 'save-style')
        e.target.textContent="Save"
        })
    })

function createNewEdit() {
const newEdit = document.createElement("input","text")
var editedReturn = newEdit.textContent
const hook = document.getElementById('hook')
// newEdit.append(hook) <note the backwards syntax here
// this code appends new edit input to <div>
hook.append(newEdit)

// listItem.value = editedReturn
}

// change textContent of orignal input value
// e.target.parentElement

// create function for newEdit that replaces
// listItem's previous value
// newEdit.addEventListener('submit', function(e){


