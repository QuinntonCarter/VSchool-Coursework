// 1
///////
// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

// for (let i=0; i < officeItems.length; i++){
//     if(officeItems[i] === "computer"){
//         console.log(officeItems[i])
//     } else {
//         console.log("nah")
//     }
// }

// -----------------------------------------------------------------------------------------------------------------------------
// 2
///////
///////

// var peopleWhoWantToSeeMadMaxFuryRoad = [
//     {
//     name: "Mike",
//     age: 12,
//     gender: "male"
//     },{
//     name: "Madeline",
//     age: 80,
//     gender: "female"
//     },{
//     name: "Cheryl",
//     age: 22,
//     gender: "female"
//     },{
//     name: "Sam",
//     age: 30,
//     gender: "male"
//     },{
//     name: "Suzy",
//     age: 4,
//     gender: "female"
//     }
// ] 


// //notice no [i] after var name in this case
// for (let i=0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
//     if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male") {
//         console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max! He's uninvited.")
//     } if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
//         console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is not old enough to see Mad Max! She's uninvited.")
//     } if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "female") {
//         console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max. She's good.")
//     } if (peopleWhoWantToSeeMadMaxFuryRoad[i].age > 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender === "male" ) {
//         console.log (peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough to see Mad Max. He's good.")
//     }
// }


// 3
///////
///////
var arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (let i=0; i < arrayOfArrays.length; i++) {
    console.log(arrayOfArrays[i])
}