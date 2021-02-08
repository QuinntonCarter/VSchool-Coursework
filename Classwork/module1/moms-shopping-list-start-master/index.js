const form = document['grocery-form']
const forDisplay = document.getElementById('hook')


form.addEventListener('submit', (e) => {
    e.preventDefault()

    const editButton = document.createElement('button')
    editButton.setAttribute('class', 'edit-style')
    editButton.textContent = 'Edit'

    editButton.addEventListener('click', (e) => {
        const editInput = document.createElement('input')
        const value = e.target.parentElement.textContent
        const placeholderVal = value.slice(5)
        editInput.placeholder = placeholderVal
        newItem.textContent = 'Edit'
        newItem.append(editInput)
        // // // // // //
        const saveEdit = document.createElement('button')
        saveEdit.textContent = 'Save'
        newItem.append(saveEdit)
        saveEdit.addEventListener('click', () => {
            newItem.textContent = editInput.value
            newItem.prepend(editButton, deleteButton)
        })
    })

    const deleteButton = document.createElement('button')
    deleteButton.setAttribute('class', 'erase-style')
    deleteButton.textContent = 'x'
    deleteButton.addEventListener('click', (e) => {
        e.target.parentElement.textContent=''
    })

    const newItem = document.createElement('li')
    newItem.setAttribute('class', 'list-item')
    newItem.textContent = form.itemName.value
    newItem.prepend(editButton, deleteButton)
    forDisplay.append(newItem)

    // sets item name input value back to nothing
    form.itemName.value=''
})