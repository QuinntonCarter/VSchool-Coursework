var form = document["passengerInfo"];

form.addEventListener("submit", function(e){
    e.preventDefault()

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
    // how to collect option/select selection


    // const passengerInformation = fullName+\n+genderCollect+\n+dietCollected+\n+otherCollect+\n+ageCollect+\n+destinationCollect+\n+"Thank you "+fullName+" for choosing Mile High!"
    
    alert(destination)
})

// ----------------------------------------- //
// reference code for checked/radio
document.animals.addEventListener("submit", function(e){
    e.preventDefault()
    var checkedAnimals = [];
    var checkedBoxes = document.querySelectorAll("input[name=likes]:checked");
    for (var i = 0; i < checkedBoxes.length; i++) {
        checkedAnimals.push(checkedBoxes[i].value);
    }
    console.log(checkedAnimals)
});

// 2
// document.animals.addEventListener("submit", function(e){
//     e.preventDefault()
//     var animals = document.animals.likes
//     var checkedAnimals = []
//     for (var i = 0; i < animals.likes.length; i++) {
//     if(animals[i].checked){
//         checkedAnimals.push(animals[i].value)
//     }
// }
//     console.log(checkedAnimals)
// })