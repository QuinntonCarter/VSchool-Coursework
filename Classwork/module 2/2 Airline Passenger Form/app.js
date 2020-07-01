var form = document["passengerInfo"];

form.addEventListener("submit", function(e){
    // e.preventDefault()

    const firstNameCollect = form.firstname.value
    const lastNameCollect = form.lastname.value
    // collected full name var
    var fullName = firstNameCollect +" "+ lastNameCollect
    // collects radio selection
    const genderCollect = form.gender.value
    // collects checkbox selections
    const dietCollect = [];
    const dietSelect = document.querySelectorAll("input[name=diet]:checked");
    for (var i=0; i < dietSelect.length; i++) {
        dietCollect.push(dietSelect[i].value);
    }
    // reg text inputs
    const otherCollect = form.other.value
    const ageCollect = form.age.value
    // how to collect option/select selection - same as others bc JS is smert
    const destination = form.destination.value
    // variable that concats all variables and organizes for alert return
    const passengerInformation = "Passenger Name: "+fullName+"\nGender Identity: "+genderCollect+"\nDietary Restrictions: "+dietCollect+", "+otherCollect+"\nAge: "+ageCollect+"\nFlight Destination: "+destination+"\nThank you "+fullName+"\nfor choosing Mile High!"
    // alert func for passenger info
    alert(passengerInformation)
})

// ----------------------------------------- //
// reference syntax for checked/radio
// document.animals.addEventListener("submit", function(e){
//     e.preventDefault()
//     var checkedAnimals = [];
//     var checkedBoxes = document.querySelectorAll("input[name=likes]:checked");
//     for (var i = 0; i < checkedBoxes.length; i++) {
//         checkedAnimals.push(checkedBoxes[i].value);
//     }
//     console.log(checkedAnimals)
// });
