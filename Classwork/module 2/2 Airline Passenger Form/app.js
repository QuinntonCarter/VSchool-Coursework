var form = document["passengerInfo"];

form.addEventListener("submit", function(e){
    e.preventDefault()

    const firstNameCollect = form.firstname.value
    const lastNameCollect = form.lastname.value
    // collected full name var
    var fullName = firstNameCollect + lastNameCollect
    // how to collect radio selection
    const genderCollect = form.gender
    // how to collect radio selection
    const dietCollect = form.diet
    // reg text inputs
    const otherCollect = form.other.value
    const ageCollect = form.age.value
    // how to collect option/select selection
    const destinationCollect = form.destination.option

    const passengerInformation = fullName+\n+genderCollect+\n+dietCollect+\n+otherCollect+\n+ageCollect+\n+destinationCollect+\n+"Thank you "+fullName+" for choosing Mile High!"
    
    alert(passengerInformation)
})