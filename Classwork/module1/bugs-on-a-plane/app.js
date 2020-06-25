// global variables for manipulation




    var form = document.getElementById("airline-form");
    var button = document.getElementById("submit");
    // var query = document.querySelector(button);
    var firstName = form.getElementsByName("first-name").value;
    var lastName = form.getElementsByName("last-name").value;
    var age = form.getElementsByName("age").value;
    var gender = form.getElementsByName("gender").value;
    var location = form.getElementsByName("travel-location").value;

    // var diet = {};

    // if (form.getElementByName("first-name").checked) {
    //     diet.push(firstName)
    // }
    // if (form.getElementById('vegan').checked) {
    //     diet.push(document.getElementById("vegan").value);
    // }
    // if (form.elements('gluten').checked) {
    //     diet.push(document.getElementById('gluten').value);
    // }
    // if (form.elements('paleo').checked) {
    //     diet.push(document.getElementById('paleo').value);
    // } else {
    //     alert("Please completely fill out the form!")
    // }



button.addEventListener("submit", function (e) {
    e.window.alert("First Name: " + firstName + "\nLast Name: " + lastName + "\nAge: " + age + "\nGender: " + gender + "\nTravel Location: " + location + "\nDiet: " + diet + "\nAwesome, now if you die, it won't be an accident.."
    )};

